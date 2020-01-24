<?php
/*
Инструкция
В head-е подключить скрипт для каждой формы

<script type="text/javascript" src="/sender.php?id=testForm&popup_id=successPopup"></script>

В src указываем путь к скрипту
Через GET-запрос передаем либо id, либо уникальный класс тега <form>
?id= 				имеет приоритет над классом
?class=				должен быть уникальным
а также можно передать id блока, который будет показан при успешном сабмите
&popup_id=			должен быть уникальным

При удачном сабмите также происходит event "form_submitted". На него можно вешать свою логику.
*/

const EMAIL   = 'info@mypowerfarm.com';
const FROM    = 'My Power Farm <info@mypowerfarm.com>';
const SUBJECT = 'Order from My Power Farm Stumb';

const FIELDS = array(
	'first_name' => [
		'label' => 'Имя',
		'required' => true,
	],
	'last_name' => [
		'label' => 'Фамилия',
		'required' => true,
	],
	'phone_number' => [
		'label' => 'Номер телефона',
	],
	'email' => [
		'label' => 'E-mail',
		'required' => true,
	],
	'country' => [
		'label' => 'Страна',
	],
	'language' => [
		'label' => 'Язык поддержки',
	],
	'time_to_call' => [
		'label' => 'Удобное время для дзвонка',
	],
);


$selfPath = $_SERVER["SCRIPT_NAME"];

if (isset($_GET["class"]) || isset($_GET["id"]))
{
	$formId = "";

	if (isset($_GET["class"])) {
		$formId = "." . $_GET["class"];
	}

	if (isset($_GET["id"]))	{
		$formId = "#" . $_GET["id"];
	}

	$popupId = isset($_GET["popup_id"]) ? "#" . $_GET["popup_id"] : null;

	if ($formId) {

		header('Content-Type: application/javascript');

		?>
        $( document ).ready(function() {
        $("<?php echo $formId;?>").attr("action","<?php echo $selfPath;?>");
        $(document).on("focus","<?php echo $formId;?>",function(){
        if(!($("<?php echo $formId;?>").find(".arfield").length)) {

        $('<?php echo $formId;?>').validate({
        submitHandler: function (form) {
        $.ajax({
        type: "POST",
        url: "<?php echo $selfPath;?>",
        data: {arfield: "field", form:"<?php echo $formId;?>"},
        success: function(data) {
        $('<?php echo $formId;?>').append(data);
        $.ajax({
        type: "POST",
        url: "<?php echo $selfPath;?>",
        data: {arfield: "code", form:"<?php echo $formId;?>"},
        success: function(data) {
        $('<?php echo $formId;?>').find(".arfield").val(data);
        var formData = {};
        $.map($('<?php echo $formId;?>').serializeArray(), function(n, i) {
        formData[n['name']] = n['value'];
        });
        $.post("<?php echo $selfPath;?>", formData, function(response) {
        response = JSON.parse(response);
        if (response.status) {

        $(document).trigger("form_submitted");
        <?php if ($popupId): ?>
            $("<?php echo $popupId ?>").show();
        <?php endif ?>
        }
        });
        }
        });
        }
        });
        }
        });


        }
        });

        });

        <?php
	}

}


if (isset($_REQUEST['arfield'])) {

	if (session_status() == PHP_SESSION_NONE) session_start();

	switch($_REQUEST['arfield']) {
		case 'field':
			$_SESSION[$_REQUEST["form"]] = md5(uniqid()); // создаем проверочный пароль
			echo "<input type='hidden' name='arfield' class='arfield'><input type='hidden' name='form_name' value='" . $_REQUEST["form"] . "'>";
			break;
		case 'code':
			echo $_SESSION[$_REQUEST["form"]]; // возвращаем проверочный пароль
			break;
	}

}

if (isset($_REQUEST['form_name'])) {

	if (session_status() == PHP_SESSION_NONE) session_start();

	if (isset($_REQUEST['arfield']) &&
		isset($_SESSION[$_REQUEST["form_name"]]) &&
		$_REQUEST['arfield'] == $_SESSION[$_REQUEST["form_name"]]) { // проверяем проверочный пароль

		$formData = array_fill_keys(array_keys(FIELDS), null);
		$isValid = true;
		foreach (FIELDS as $fieldName => $fieldOptions) {
			if (!empty($_POST[$fieldName])) {
				$formData[$fieldName] = htmlspecialchars($_POST[$fieldName]);
			} else if (isset($fieldOptions['required']) && $fieldOptions['required'] == true) {
				$isValid = false;
			}
		}

		if (!$isValid || !array_filter($formData)) {
			echo json_encode([
				'status' => false,
				'error' => 'All or required fields are missing',
			]);
			return;
		}

		$messageBody = '
			<br /><br />' .
			implode('<br />', array_map(function($name, $value) {
				return FIELDS[$name]['label'] . ': ' . $value;
			}, array_keys($formData), $formData)) . '<br />';

		set_error_handler(function ($severity, $message, $file, $line) {
			throw new Exception($message, 0);
		});

		try {

			mail(EMAIL, SUBJECT, $messageBody, "From: " . FROM . " \r\n  \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n");

			$f = fopen(".leads.csv", "a+");

			fputcsv($f, array_merge($formData, array(
				date('d.m.y / H:i'),
				getenv('HTTP_REFERER')
			)), ';');

			fclose($f);

			unset($_SESSION[$_REQUEST["form_name"]]); // очищаем проверочный пароль

			echo json_encode(['status' => true]);

		} catch (Exception $e) {
			echo json_encode(['status' => false, 'error' => $e->getMessage()]);
			return;
		}


	} else {

		echo json_encode([
			'status' => false,
			'error' => 'Password already expired'
		]);

	}
}
