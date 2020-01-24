$( document ).ready(function () {
	(function showLanguageList() {
		$('.current-language').on('click', function () {
			$(this).toggleClass('active');
		});
	})();
	(function closeLanguageList() {
		$(document).mouseup(function (e) {
			if (!$('.language-list-wrapper').is(e.target) && ($('.language-list-wrapper').has(e.target).length) === 0 && $('.current-language').hasClass('active')){
				$('.current-language').removeClass('active');
			}
		});
	})();
	(function addCustomScroll() {
		media('all and (min-width: 927px)', function () {
			$('.language-list-wrapper').mCustomScrollbar({
				documentTouchScroll: true
			});
		});
		media('all and (max-width: 926px)', function () {
			$('.language-list-wrapper').mCustomScrollbar("destroy");
		});
	})();
	(function initMainSlider() {
		$('#slider-background').on('init', function() {
			$('.main-arrow-slider').wrapAll('<div class="slider-arrow-wrapper template-wrapper"></div>');
		});

		$('#slider-background').slick({
			fade: true,
			dots: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
			asNavFor: '#main-slider',
			prevArrow: '<button type="button" class="slick-prev main-arrow-slider main-slide-arrow"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<path d="M16.15 6.13267L2.9019 6.13267L7.4613 1.4804C7.79323 1.14171 7.79323 0.592483 7.46151 0.254013C7.12959 -0.0846728 6.59111 -0.0846729 6.25919 0.254013L0.249049 6.38679C0.209525 6.42712 0.17425 6.47157 0.143225 6.51884C0.128989 6.54074 0.119 6.56438 0.106675 6.58714C0.0926501 6.61403 0.0765006 6.63962 0.0652377 6.66802C0.0531241 6.69729 0.0463263 6.72765 0.0378253 6.758C0.0308138 6.78207 0.0216757 6.80506 0.0167891 6.82977C0.00573793 6.88615 6.16946e-07 6.94296 6.11961e-07 6.99998C6.11904e-07 7.00064 0.000212328 7.00129 0.000212327 7.00194C0.000425946 7.05809 0.00595153 7.11447 0.0167891 7.16976C0.0218874 7.19578 0.031449 7.21985 0.0388876 7.24543C0.047175 7.27427 0.0535494 7.30354 0.0650259 7.33152C0.0773493 7.36165 0.0939241 7.38898 0.109225 7.41738C0.1207 7.43863 0.129838 7.46031 0.143012 7.48069C0.174037 7.52861 0.209738 7.57328 0.249476 7.61383L6.2594 13.746C6.59132 14.0846 7.12959 14.0846 7.46151 13.7462C7.79344 13.4075 7.79344 12.8583 7.46151 12.5194L2.90211 7.8673L16.15 7.8673C16.6194 7.8673 17 7.47896 17 6.99999C17 6.52101 16.6194 6.13267 16.15 6.13267Z" fill="#D1D1D1"/>\n' +
				'</svg></button>',
			nextArrow: '<button type="button" class="slick-next  main-arrow-slider main-slide-arrow"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<path d="M0.85 7.86733H14.0981L9.5387 12.5196C9.20678 12.8583 9.20678 13.4075 9.53849 13.746C9.87041 14.0847 10.4089 14.0847 10.7408 13.746L16.751 7.6132C16.7905 7.57288 16.8258 7.52843 16.8568 7.48116C16.871 7.45926 16.881 7.43562 16.8933 7.41286C16.9074 7.38597 16.9235 7.36038 16.9348 7.33198C16.9469 7.30271 16.9537 7.27235 16.9622 7.24199C16.9692 7.21793 16.9783 7.19494 16.9832 7.17022C16.9943 7.11385 17 7.05704 17 7.00001C17 6.99936 16.9998 6.99871 16.9998 6.99806C16.9996 6.9419 16.994 6.88553 16.9832 6.83024C16.9781 6.80422 16.9686 6.78015 16.9611 6.75456C16.9528 6.72573 16.9465 6.69645 16.935 6.66848C16.9227 6.63834 16.9061 6.61102 16.8908 6.58262C16.8793 6.56137 16.8702 6.53969 16.857 6.5193C16.826 6.47139 16.7903 6.42672 16.7505 6.38617L10.7406 0.254042C10.4087 -0.0846443 9.87041 -0.0846446 9.53849 0.253825C9.20656 0.592511 9.20656 1.14174 9.53849 1.48064L14.0979 6.1327H0.85C0.380587 6.1327 0 6.52104 0 7.00001C0 7.47899 0.380587 7.86733 0.85 7.86733Z" fill="#D1D1D1"/>\n' +
				'</svg></button>'
		});
		$('#main-slider').slick({
			dots: false,
			arrows: false,
			fade: true,
			asNavFor: '#slider-background'
		});

	})();
	(function initAccountSlider() {
		$('#account-slider').on('init', function() {
			$('.account-arrow').wrapAll('<div class="account-slider-arrow-wrapper template-wrapper"></div>');
		});
		$('#account-slider').slick({
			arrows: true,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: '<button type="button" class="slick-prev account-arrow main-slide-arrow"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<path d="M16.15 6.13267L2.9019 6.13267L7.4613 1.4804C7.79323 1.14171 7.79323 0.592483 7.46151 0.254013C7.12959 -0.0846728 6.59111 -0.0846729 6.25919 0.254013L0.249049 6.38679C0.209525 6.42712 0.17425 6.47157 0.143225 6.51884C0.128989 6.54074 0.119 6.56438 0.106675 6.58714C0.0926501 6.61403 0.0765006 6.63962 0.0652377 6.66802C0.0531241 6.69729 0.0463263 6.72765 0.0378253 6.758C0.0308138 6.78207 0.0216757 6.80506 0.0167891 6.82977C0.00573793 6.88615 6.16946e-07 6.94296 6.11961e-07 6.99998C6.11904e-07 7.00064 0.000212328 7.00129 0.000212327 7.00194C0.000425946 7.05809 0.00595153 7.11447 0.0167891 7.16976C0.0218874 7.19578 0.031449 7.21985 0.0388876 7.24543C0.047175 7.27427 0.0535494 7.30354 0.0650259 7.33152C0.0773493 7.36165 0.0939241 7.38898 0.109225 7.41738C0.1207 7.43863 0.129838 7.46031 0.143012 7.48069C0.174037 7.52861 0.209738 7.57328 0.249476 7.61383L6.2594 13.746C6.59132 14.0846 7.12959 14.0846 7.46151 13.7462C7.79344 13.4075 7.79344 12.8583 7.46151 12.5194L2.90211 7.8673L16.15 7.8673C16.6194 7.8673 17 7.47896 17 6.99999C17 6.52101 16.6194 6.13267 16.15 6.13267Z" fill="#D1D1D1"/>\n' +
				'</svg></button>',
			nextArrow: '<button type="button" class="slick-next account-arrow main-slide-arrow"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<path d="M0.85 7.86733H14.0981L9.5387 12.5196C9.20678 12.8583 9.20678 13.4075 9.53849 13.746C9.87041 14.0847 10.4089 14.0847 10.7408 13.746L16.751 7.6132C16.7905 7.57288 16.8258 7.52843 16.8568 7.48116C16.871 7.45926 16.881 7.43562 16.8933 7.41286C16.9074 7.38597 16.9235 7.36038 16.9348 7.33198C16.9469 7.30271 16.9537 7.27235 16.9622 7.24199C16.9692 7.21793 16.9783 7.19494 16.9832 7.17022C16.9943 7.11385 17 7.05704 17 7.00001C17 6.99936 16.9998 6.99871 16.9998 6.99806C16.9996 6.9419 16.994 6.88553 16.9832 6.83024C16.9781 6.80422 16.9686 6.78015 16.9611 6.75456C16.9528 6.72573 16.9465 6.69645 16.935 6.66848C16.9227 6.63834 16.9061 6.61102 16.8908 6.58262C16.8793 6.56137 16.8702 6.53969 16.857 6.5193C16.826 6.47139 16.7903 6.42672 16.7505 6.38617L10.7406 0.254042C10.4087 -0.0846443 9.87041 -0.0846446 9.53849 0.253825C9.20656 0.592511 9.20656 1.14174 9.53849 1.48064L14.0979 6.1327H0.85C0.380587 6.1327 0 6.52104 0 7.00001C0 7.47899 0.380587 7.86733 0.85 7.86733Z" fill="#D1D1D1"/>\n' +
				'</svg></button>',
			touchThreshold: 10000,
			initialSlide: 1,
		});
	})();
	(function animateLaptop() {
		if ($('.section-benefits').length) {
			$('.section-benefits').viewportChecker({
				classToAdd: 'animate',
			});
		}
	})();
	(function parsingNews() {
		if ($('.section-news').length) {
			getnewsrss();
		}
	})();
	(function addTableTabs() {
		if ($('.table-list').length) {
			addTabs('.table-list');
		}
	})();
	(function fixedTableHeader() {
		if ($('.table-list').length) {
			$(".table-trade").tableHeadFixer();
		}
	})();
	(function fixedMenu() {
		var coordinateMenu = $('.main-nav-wrapper').offset().top;
		$(window).scroll(function () {
			if($(this).scrollTop() > coordinateMenu) {
				$('.main-nav-wrapper').addClass('fixed');
				$('.fake-menu').addClass('show');
			} else {
				$('.main-nav-wrapper').removeClass('fixed');
				$('.fake-menu').removeClass('show');
			}
		});
	})();
	(function translates404Page() {
		if ($('.page-404').length) {
			var currLanguage;
			var titleText = {
				ru: "BX-markets - ваш проверенный CFD брокер",
				es: "BX-markets: su corredor de CFD confiable",
				de: "BX-markets - Ihr vertrauenswürdiger CFD-Broker",
				fr: "BX-markets - votre courtier CFD de confiance",
				it: "BX-markets - il tuo broker CFD di fiducia",
				zh: "BX-markets-您值得信賴的差價合約經紀商"
			};

			currLanguage = definesLanguage();

			if ( currLanguage != "en" ) {
				$('title').text(titleText[currLanguage]);
				$('html').attr('lang', currLanguage);
			}

			$('.main-nav-wrapper_404.' + currLanguage).addClass('show');
			$('.prev-title-404.' + currLanguage).addClass('show');
		}
	})();
	(function addFakeMenu() {
		$('.main-header').prepend('<div class="fake-menu"></div>');
	})();
	(function animateNumber() {
		if ($('.main-header_about').length) {
			$('.main-header_about').viewportChecker({
				callbackFunction: function () {
					setTimeout(function () {
						var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

						$('.indicator-number_1').animateNumber({
							number: 450000,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});

						$('.indicator-number_2').animateNumber({
							number: 7,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});

						$('.indicator-number_3').animateNumber({
							number: 100,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});

						$('.indicator-number_3_de').animateNumber({
							number: 200,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});

						$('.indicator-number_4').animateNumber({
							number: 300,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});

						$('.indicator-number_4_de').animateNumber({
							number: 7,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});

						$('.indicator-number_5').animateNumber({
							number: 6,
							numberStep: comma_separator_number_step,
						},{
							easing: 'swing',
							duration: 1500
						});
					}, 700)
				},
			});
		}
	})();
	(function animatesTerminal() {
		if ($('.section-trading-opportunities').length) {
			$('.section-trading-opportunities').viewportChecker({
				classToAdd: 'animate',
			})
		}
	})();
	(function addHistoryTabs() {
		if ($('.history-list').length) {
			addTabs('.history-list');
		}
	})();
	(function animatesIpad() {
		if ($('.section-wrapper_platform-advantages').length) {
			$('.section-wrapper_platform-advantages').viewportChecker({
				classToAdd: 'animate',
			})
		}
	})();
	(function openCallbackForm() {
		$('.btn-callback-open').on('click', function () {
			if (!$('.callback-popup').hasClass('show')) {
				$('.callback-popup').addClass('show');
				$('.main-header').addClass('not-fixed');
			} else {
				$('.callback-popup').removeClass('show');
				$('.main-header').removeClass('not-fixed');
			}
		})
	})();
	(function closeCallbackPopup() {
		$('.close-button').on('click', function () {
			$(this).parent().removeClass('show');
			$('.main-header').removeClass('not-fixed');
		});
	})();
	(function addCustomSelectCountry() {
		if ($('.select-custom-wrapper').length) {
			var data = [
				{ id: 'Afghanistan', text: 'Afghanistan'},
				{ id: 'Aland Islands', text: 'Aland Islands'},
				{ id: 'Albania', text: 'Albania'},
				{ id: 'Algeria', text: 'Algeria'},
				{ id: 'American Samoa', text: 'American Samoa'},
				{ id: 'Andorra', text: 'Andorra'},
				{ id: 'Angola', text: 'Angola'},
				{ id: 'Anguilla', text: 'Anguilla'},
				{ id: 'Antarctica', text: 'Antarctica'},
				{ id: 'Antigua And Barbuda', text: 'Antigua And Barbuda'},
				{ id: 'Argentina', text: 'Argentina'},
				{ id: 'Armenia', text: 'Armenia'},
				{ id: 'Aruba', text: 'Aruba'},
				{ id: 'Australia', text: 'Australia'},
				{ id: 'Austria', text: 'Austria'},
				{ id: 'Azerbaijan', text: 'Azerbaijan'},
				{ id: 'Bahamas', text: 'Bahamas'},
				{ id: 'Bahrain', text: 'Bahrain'},
				{ id: 'Bangladesh', text: 'Bangladesh'},
				{ id: 'Barbados', text: 'Barbados'},
				{ id: 'Belarus', text: 'Belarus'},
				{ id: 'Belgium', text: 'Belgium'},
				{ id: 'Belize', text: 'Belize'},
				{ id: 'Benin', text: 'Benin'},
				{ id: 'Bermuda', text: 'Bermuda'},
				{ id: 'Bhutan', text: 'Bhutan'},
				{ id: 'Bolivia', text: 'Bolivia'},
				{ id: 'Bosnia And Herzegovina', text: 'Bosnia And Herzegovina'},
				{ id: 'Botswana', text: 'Botswana'},
				{ id: 'Bouvet Island', text: 'Bouvet Island'},
				{ id: 'Brazil', text: 'Brazil'},
				{ id: 'British Indian Ocean Territory', text: 'British Indian Ocean Territory'},
				{ id: 'Brunei Darussalam', text: 'Brunei Darussalam'},
				{ id: 'Bulgaria', text: 'Bulgaria'},
				{ id: 'Burkina Faso', text: 'Burkina Faso'},
				{ id: 'Burundi', text: 'Burundi'},
				{ id: 'Cambodia', text: 'Cambodia'},
				{ id: 'Cameroon', text: 'Cameroon'},
				{ id: 'Canada', text: 'Canada'},
				{ id: 'Cape Verde', text: 'Cape Verde'},
				{ id: 'Cayman Islands', text: 'Cayman Islands'},
				{ id: 'Central African Republic', text: 'Central African Republic'},
				{ id: 'Chad', text: 'Chad'},
				{ id: 'Chile', text: 'Chile'},
				{ id: 'China', text: 'China'},
				{ id: 'Christmas Island', text: 'Christmas Island'},
				{ id: 'Cocos (Keeling) Islands', text: 'Cocos (Keeling) Islands'},
				{ id: 'Colombia', text: 'Colombia'},
				{ id: 'Comoros', text: 'Comoros'},
				{ id: 'Congo', text: 'Congo'},
				{ id: 'Congo, Democratic Republic', text: 'Congo, Democratic Republic'},
				{ id: 'Cook Islands', text: 'Cook Islands'},
				{ id: 'Costa Rica', text: 'Costa Rica'},
				{ id: 'Cote D\'Ivoire', text: 'Cote D\'Ivoire'},
				{ id: 'Croatia', text: 'Croatia'},
				{ id: 'Cuba', text: 'Cuba'},
				{ id: 'Cyprus', text: 'Cyprus'},
				{ id: 'Czech Republic', text: 'Czech Republic'},
				{ id: 'Denmark', text: 'Denmark'},
				{ id: 'Djibouti', text: 'Djibouti'},
				{ id: 'Dominica', text: 'Dominica'},
				{ id: 'Dominican Republic', text: 'Dominican Republic'},
				{ id: 'Ecuador', text: 'Ecuador'},
				{ id: 'Egypt', text: 'Egypt'},
				{ id: 'El Salvador', text: 'El Salvador'},
				{ id: 'Equatorial Guinea', text: 'Equatorial Guinea'},
				{ id: 'Eritrea', text: 'Eritrea'},
				{ id: 'Estonia', text: 'Estonia'},
				{ id: 'Ethiopia', text: 'Ethiopia'},
				{ id: 'Falkland Islands (Malvinas)', text: 'Falkland Islands (Malvinas)'},
				{ id: 'Faroe Islands', text: 'Faroe Islands'},
				{ id: 'Fiji', text: 'Fiji'},
				{ id: 'Finland', text: 'Finland'},
				{ id: 'France', text: 'France'},
				{ id: 'French Guiana', text: 'French Guiana'},
				{ id: 'French Polynesia', text: 'French Polynesia'},
				{ id: 'French Southern Territories', text: 'French Southern Territories'},
				{ id: 'Gabon', text: 'Gabon'},
				{ id: 'Gambia', text: 'Gambia'},
				{ id: 'Georgia', text: 'Georgia'},
				{ id: 'Germany', text: 'Germany'},
				{ id: 'Ghana', text: 'Ghana'},
				{ id: 'Gibraltar', text: 'Gibraltar'},
				{ id: 'Greece', text: 'Greece'},
				{ id: 'Greenland', text: 'Greenland'},
				{ id: 'Grenada', text: 'Grenada'},
				{ id: 'Guadeloupe', text: 'Guadeloupe'},
				{ id: 'Guam', text: 'Guam'},
				{ id: 'Guatemala', text: 'Guatemala'},
				{ id: 'Guernsey', text: 'Guernsey'},
				{ id: 'Guinea', text: 'Guinea'},
				{ id: 'Guinea-Bissau', text: 'Guinea-Bissau'},
				{ id: 'Guyana', text: 'Guyana'},
				{ id: 'Haiti', text: 'Haiti'},
				{ id: 'Heard Island & Mcdonald Islands', text: 'Heard Island & Mcdonald Islands'},
				{ id: 'Holy See (Vatican City State)', text: 'Holy See (Vatican City State)'},
				{ id: 'Honduras', text: 'Honduras'},
				{ id: 'Hong Kong', text: 'Hong Kong'},
				{ id: 'Hungary', text: 'Hungary'},
				{ id: 'Iceland', text: 'Iceland'},
				{ id: 'India', text: 'India'},
				{ id: 'Indonesia', text: 'Indonesia'},
				{ id: 'Iran', text: 'Iran'},
				{ id: 'Iraq', text: 'Iraq'},
				{ id: 'Ireland', text: 'Ireland'},
				{ id: 'Isle Of Man', text: 'Isle Of Man'},
				{ id: 'Israel', text: 'Israel'},
				{ id: 'Italy', text: 'Italy'},
				{ id: 'Jamaica', text: 'Jamaica'},
				{ id: 'Japan', text: 'Japan'},
				{ id: 'Jersey', text: 'Jersey'},
				{ id: 'Jordan', text: 'Jordan'},
				{ id: 'Kazakhstan', text: 'Kazakhstan'},
				{ id: 'Kenya', text: 'Kenya'},
				{ id: 'Kiribati', text: 'Kiribati'},
				{ id: 'Korea', text: 'Korea'},
				{ id: 'Kuwait', text: 'Kuwait'},
				{ id: 'Kyrgyzstan', text: 'Kyrgyzstan'},
				{ id: 'Lao People\'s Democratic Republic', text: 'Lao People\'s Democratic Republic'},
				{ id: 'Latvia', text: 'Latvia'},
				{ id: 'Lebanon', text: 'Lebanon'},
				{ id: 'Lesotho', text: 'Lesotho'},
				{ id: 'Liberia', text: 'Liberia'},
				{ id: 'Libyan Arab Jamahiriya', text: 'Libyan Arab Jamahiriya'},
				{ id: 'Liechtenstein', text: 'Liechtenstein'},
				{ id: 'Lithuania', text: 'Lithuania'},
				{ id: 'Luxembourg', text: 'Luxembourg'},
				{ id: 'Macao', text: 'Macao'},
				{ id: 'Macedonia', text: 'Macedonia'},
				{ id: 'Madagascar', text: 'Madagascar'},
				{ id: 'Malawi', text: 'Malawi'},
				{ id: 'Malaysia', text: 'Malaysia'},
				{ id: 'Maldives', text: 'Maldives'},
				{ id: 'Mali', text: 'Mali'},
				{ id: 'Malta', text: 'Malta'},
				{ id: 'Marshall Islands', text: 'Marshall Islands'},
				{ id: 'Martinique', text: 'Martinique'},
				{ id: 'Mauritania', text: 'Mauritania'},
				{ id: 'Mauritius', text: 'Mauritius'},
				{ id: 'Mayotte', text: 'Mayotte'},
				{ id: 'Mexico', text: 'Mexico'},
				{ id: 'Micronesia, Federated States Of', text: 'Micronesia, Federated States Of'},
				{ id: 'Moldova', text: 'Moldova'},
				{ id: 'Monaco', text: 'Monaco'},
				{ id: 'Mongolia', text: 'Mongolia'},
				{ id: 'Montenegro', text: 'Montenegro'},
				{ id: 'Montserrat', text: 'Montserrat'},
				{ id: 'Morocco', text: 'Morocco'},
				{ id: 'Mozambique', text: 'Mozambique'},
				{ id: 'Myanmar', text: 'Myanmar'},
				{ id: 'Namibia', text: 'Namibia'},
				{ id: 'Nauru', text: 'Nauru'},
				{ id: 'Nepal', text: 'Nepal'},
				{ id: 'Netherlands', text: 'Netherlands'},
				{ id: 'Netherlands Antilles', text: 'Netherlands Antilles'},
				{ id: 'New Caledonia', text: 'New Caledonia'},
				{ id: 'New Zealand', text: 'New Zealand'},
				{ id: 'Nicaragua', text: 'Nicaragua'},
				{ id: 'Niger', text: 'Niger'},
				{ id: 'Nigeria', text: 'Nigeria'},
				{ id: 'Niue', text: 'Niue'},
				{ id: 'Norfolk Island', text: 'Norfolk Island'},
				{ id: 'Northern Mariana Islands', text: 'Northern Mariana Islands'},
				{ id: 'Norway', text: 'Norway'},
				{ id: 'Oman', text: 'Oman'},
				{ id: 'Pakistan', text: 'Pakistan'},
				{ id: 'Palau', text: 'Palau'},
				{ id: 'Palestinian Territory', text: 'Palestinian Territory'},
				{ id: 'Panama', text: 'Panama'},
				{ id: 'Papua New Guinea', text: 'Papua New Guinea'},
				{ id: 'Paraguay', text: 'Paraguay'},
				{ id: 'Peru', text: 'Peru'},
				{ id: 'Philippines', text: 'Philippines'},
				{ id: 'Pitcairn', text: 'Pitcairn'},
				{ id: 'Poland', text: 'Poland'},
				{ id: 'Portugal', text: 'Portugal'},
				{ id: 'Puerto Rico', text: 'Puerto Rico'},
				{ id: 'Qatar', text: 'Qatar'},
				{ id: 'Reunion', text: 'Reunion'},
				{ id: 'Romania', text: 'Romania'},
				{ id: 'Russian Federation', text: 'Russian Federation'},
				{ id: 'Rwanda', text: 'Rwanda'},
				{ id: 'aint Barthelemy', text: 'Saint Barthelemy'},
				{ id: 'Saint Helena', text: 'Saint Helena'},
				{ id: 'Saint Kitts And Nevis', text: 'Saint Kitts And Nevis'},
				{ id: 'Saint Lucia', text: 'Saint Lucia'},
				{ id: 'Saint Martin', text: 'Saint Martin'},
				{ id: 'Saint Pierre And Miquelon', text: 'Saint Pierre And Miquelon'},
				{ id: 'Saint Vincent And Grenadines', text: 'Saint Vincent And Grenadines'},
				{ id: 'Samoa', text: 'Samoa'},
				{ id: 'San Marino', text: 'San Marino'},
				{ id: 'Sao Tome And Principe', text: 'Sao Tome And Principe'},
				{ id: 'Saudi Arabia', text: 'Saudi Arabia'},
				{ id: 'Senegal', text: 'Senegal'},
				{ id: 'Serbia', text: 'Serbia'},
				{ id: 'Seychelles', text: 'Seychelles'},
				{ id: 'Sierra Leone', text: 'Sierra Leone'},
				{ id: 'Singapore', text: 'Singapore'},
				{ id: 'Slovakia', text: 'Slovakia'},
				{ id: 'Slovenia', text: 'Slovenia'},
				{ id: 'Solomon Islands', text: 'Solomon Islands'},
				{ id: 'Somalia', text: 'Somalia'},
				{ id: 'South Africa', text: 'South Africa'},
				{ id: 'South Georgia And Sandwich Isl.', text: 'South Georgia And Sandwich Isl.'},
				{ id: 'Spain', text: 'Spain'},
				{ id: 'Sri Lanka', text: 'Sri Lanka'},
				{ id: 'Sudan', text: 'Sudan'},
				{ id: 'Suriname', text: 'Suriname'},
				{ id: 'Svalbard And Jan Mayen', text: 'Svalbard And Jan Mayen'},
				{ id: 'Swaziland', text: 'Swaziland'},
				{ id: 'Sweden', text: 'Sweden'},
				{ id: 'Switzerland', text: 'Switzerland'},
				{ id: 'Syrian Arab Republic', text: 'Syrian Arab Republic'},
				{ id: 'Taiwan', text: 'Taiwan'},
				{ id: 'Tajikistan', text: 'Tajikistan'},
				{ id: 'Tanzania', text: 'Tanzania'},
				{ id: 'Thailand', text: 'Thailand'},
				{ id: 'Timor-Leste', text: 'Timor-Leste'},
				{ id: 'Togo', text: 'Togo'},
				{ id: 'Tokelau', text: 'Tokelau'},
				{ id: 'Tonga', text: 'Tonga'},
				{ id: 'Trinidad And Tobago', text: 'Trinidad And Tobago'},
				{ id: 'Tunisia', text: 'Tunisia'},
				{ id: 'Turkey', text: 'Turkey'},
				{ id: 'Turkmenistan', text: 'Turkmenistan'},
				{ id: 'Turks And Caicos Islands', text: 'Turks And Caicos Islands'},
				{ id: 'Tuvalu', text: 'Tuvalu'},
				{ id: 'Uganda', text: 'Uganda'},
				{ id: 'Ukraine', text: 'Ukraine'},
				{ id: 'United Arab Emirates', text: 'United Arab Emirates'},
				{ id: 'United Kingdom', text: 'United Kingdom'},
				{ id: 'United States', text: 'United States'},
				{ id: 'United States Outlying Islands', text: 'United States Outlying Islands'},
				{ id: 'Uruguay', text: 'Uruguay'},
				{ id: 'Uzbekistan', text: 'Uzbekistan'},
				{ id: 'Vanuatu', text: 'Vanuatu'},
				{ id: 'Venezuela', text: 'Venezuela'},
				{ id: 'Viet Nam', text: 'Viet Nam'},
				{ id: 'Virgin Islands, British', text: 'Virgin Islands, British'},
				{ id: 'Virgin Islands, U.S.', text: 'Virgin Islands, U.S.'},
				{ id: 'Wallis And Futuna', text: 'Wallis And Futuna'},
				{ id: 'Western Sahara', text: 'Western Sahara'},
				{ id: 'Yemen', text: 'Yemen'},
				{ id: 'Zambia', text: 'Zambia'},
				{ id: 'Zimbabwe', text: 'Zimbabwe'}
			];
			$('#select-country').select2({
				data: data,
				dropdownParent: '.select-wrapper-country',
				tags: true,
			});
		}
	})();
	(function addCustomSelectLang() {
		if ($('.select-custom-wrapper').length) {
			$('#select-lang').select2({
				dropdownParent: '.select-wrapper-lang',
			});
		}
	})();
	(function addPhoneMusk() {
		if ($('input[type="tel"]').length) {

			$('input[type="tel"]').mask('###################################', {
				translation: {
					'#': {
						pattern: /-?[0-9() \-+]/, reverse: true
					}
				}
			});
		}
	})();
	(function showSuccesText() {
		$(document).on('form_submitted', function(e) {
			$('form').find('input').val('');
			$('.callback-popup').removeClass('show');
			setTimeout(function () {
				$('.saccess-popup').addClass('show');
			}, 270);
		});
	})();
	$(function () { objectFitImages() });
	(function openMobileMenu() {
		$('.mobile-burger').on('click', function () {
			if (!$('.main-header').hasClass('open-mobile')) {
				$('.main-header').addClass('open-mobile');
				$(this).addClass('active');
				$('body, html').addClass('no-scroll');
			} else {
				$('.main-header').removeClass('open-mobile');
				$(this).removeClass('active');
				$('body, html').removeClass('no-scroll');
			}
		})
	})();
	(function setsBlockHeight() {
		if ($('.mobile-menu-wrapper').length) {
			function calcVH() {
				var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				var thisElement = document.getElementsByClassName("mobile-menu-wrapper")[0];
				thisElement.setAttribute("style", "height:" + vH + "px;");
			}

			calcVH();
			window.addEventListener('onorientationchange', calcVH, true);
			window.addEventListener('resize', calcVH, true);
		}
	})();
});


var getnewsrss = function() {
	var html='',
		langData,
		globalLang = 'en',
		textLang = {
			ru: {authors: 'Источник', date: 'Дата публикации', more: 'Подробнее'},
			en: {authors: 'Source', date: 'Publication Date', more: 'More'},
			es: {authors: 'El autor', date: 'Fecha de publicación', more: 'Más detalles'},
			de: {authors: 'Der Autor', date: 'Veröffentlichungsdatum', more: 'Weitere Details'},
			fr: {authors: 'L`auteur', date: 'Date de publication', more: 'Plus de détails'},
			it: {authors: 'L`autore', date: 'Data di pubblicazione', more: 'Maggiori dettagli'},
			cn: {authors: '作者', date: '出版日期', more: '更多細節'}
		};
	langData = definesLanguage() == 'zh' ? 'cn' : definesLanguage();

	$.ajax({
		url: '/resources/rssrequest.php',
		method: 'GET',
		data: {lang:langData},
		type: 'json',
		success: function(data){
			var res = JSON.parse(data);
			for(var i=0;i<res.length;i++) {

				var imgClass = ( res[i].img_url == '' ) ? 'hide' : '';
				html += '<a href="' + res[i].link + '" class="news-item" target="_blank">' +
					'<span class="news-img ' + imgClass + '" style="background-image: url('+res[i].img_url+')"></span>' +
					'<span class="news-title">' + res[i].title + '</span>' +
					'</a>';
			}
			$('.data--js-news').html(html);
			$('.data--js-news').on('init', function() {
				$('.news-arrow-slider').appendTo('.news-arrow-wrapper');
			});
			$('.data--js-news').slick({
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow: '<button type="button" class="slick-prev news-arrow-slider main-slide-arrow"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M16.15 6.13267L2.9019 6.13267L7.4613 1.4804C7.79323 1.14171 7.79323 0.592483 7.46151 0.254013C7.12959 -0.0846728 6.59111 -0.0846729 6.25919 0.254013L0.249049 6.38679C0.209525 6.42712 0.17425 6.47157 0.143225 6.51884C0.128989 6.54074 0.119 6.56438 0.106675 6.58714C0.0926501 6.61403 0.0765006 6.63962 0.0652377 6.66802C0.0531241 6.69729 0.0463263 6.72765 0.0378253 6.758C0.0308138 6.78207 0.0216757 6.80506 0.0167891 6.82977C0.00573793 6.88615 6.16946e-07 6.94296 6.11961e-07 6.99998C6.11904e-07 7.00064 0.000212328 7.00129 0.000212327 7.00194C0.000425946 7.05809 0.00595153 7.11447 0.0167891 7.16976C0.0218874 7.19578 0.031449 7.21985 0.0388876 7.24543C0.047175 7.27427 0.0535494 7.30354 0.0650259 7.33152C0.0773493 7.36165 0.0939241 7.38898 0.109225 7.41738C0.1207 7.43863 0.129838 7.46031 0.143012 7.48069C0.174037 7.52861 0.209738 7.57328 0.249476 7.61383L6.2594 13.746C6.59132 14.0846 7.12959 14.0846 7.46151 13.7462C7.79344 13.4075 7.79344 12.8583 7.46151 12.5194L2.90211 7.8673L16.15 7.8673C16.6194 7.8673 17 7.47896 17 6.99999C17 6.52101 16.6194 6.13267 16.15 6.13267Z" fill="#D1D1D1"/>\n' +
					'</svg></button>',
				nextArrow: '<button type="button" class="slick-next news-arrow-slider main-slide-arrow"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M0.85 7.86733H14.0981L9.5387 12.5196C9.20678 12.8583 9.20678 13.4075 9.53849 13.746C9.87041 14.0847 10.4089 14.0847 10.7408 13.746L16.751 7.6132C16.7905 7.57288 16.8258 7.52843 16.8568 7.48116C16.871 7.45926 16.881 7.43562 16.8933 7.41286C16.9074 7.38597 16.9235 7.36038 16.9348 7.33198C16.9469 7.30271 16.9537 7.27235 16.9622 7.24199C16.9692 7.21793 16.9783 7.19494 16.9832 7.17022C16.9943 7.11385 17 7.05704 17 7.00001C17 6.99936 16.9998 6.99871 16.9998 6.99806C16.9996 6.9419 16.994 6.88553 16.9832 6.83024C16.9781 6.80422 16.9686 6.78015 16.9611 6.75456C16.9528 6.72573 16.9465 6.69645 16.935 6.66848C16.9227 6.63834 16.9061 6.61102 16.8908 6.58262C16.8793 6.56137 16.8702 6.53969 16.857 6.5193C16.826 6.47139 16.7903 6.42672 16.7505 6.38617L10.7406 0.254042C10.4087 -0.0846443 9.87041 -0.0846446 9.53849 0.253825C9.20656 0.592511 9.20656 1.14174 9.53849 1.48064L14.0979 6.1327H0.85C0.380587 6.1327 0 6.52104 0 7.00001C0 7.47899 0.380587 7.86733 0.85 7.86733Z" fill="#D1D1D1"/>\n' +
					'</svg></button>',
				responsive: [
					{
						breakpoint: 927,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 641,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});
		},
		error: function(){
			console.log('error');
		}
	});
}

function definesLanguage() {
	var pageUrl = location.pathname.split('/');
	var curLanguage;
	for (var i = 0; i < pageUrl.length; i++) {
		if (pageUrl[i] == 'ru' || pageUrl[i] == 'es' || pageUrl[i] == 'de' || pageUrl[i] == 'fr' || pageUrl[i] == 'it' || pageUrl[i] == 'zh') {
			curLanguage = pageUrl[i];
			break;
		} else {
			curLanguage = "en";
		}
	}

	return curLanguage;
}
function media(mediaQueryString, action){
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) { //Попадает в запроc
			if (action  && typeof(action) === 'function') {
				action();
			}
		}
	};
	var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);
}
function addTabs(tabbed_selector) {
	var tabbed = document.querySelector(tabbed_selector);
	var tablist = tabbed.querySelector('ul');
	var tabs = tablist.querySelectorAll('a');
	var panels = tabbed.querySelectorAll('[id^="section"]');
	var switchTab = function switchTab(oldTab, newTab) {
		newTab.focus();
		newTab.removeAttribute('tabindex');
		newTab.setAttribute('aria-selected', 'true');
		oldTab.removeAttribute('aria-selected');
		oldTab.setAttribute('tabindex', '-1');
		var index = Array.prototype.indexOf.call(tabs, newTab);
		var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
		panels[oldIndex].hidden = true;
		panels[index].hidden = false;
	};
	tablist.setAttribute('role', 'tablist');
	Array.prototype.forEach.call(tabs, function (tab, i) {
		tab.setAttribute('role', 'tab');
		tab.setAttribute('id', 'tab' + (i + 1));
		tab.setAttribute('tabindex', '-1');
		tab.parentNode.setAttribute('role', 'presentation');
		tab.addEventListener('click', function (e) {
			e.preventDefault();
			var currentTab = tablist.querySelector('[aria-selected]');
			if (e.currentTarget !== currentTab) {
				switchTab(currentTab, e.currentTarget);
			}
		});
		tab.addEventListener('keydown', function (e) {
			var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
			var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
			if (dir !== null) {
				e.preventDefault();
				dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
			}
		});
	});
	Array.prototype.forEach.call(panels, function (panel, i) {
		panel.setAttribute('role', 'tabpanel');
		panel.setAttribute('tabindex', '-1');
		var id = panel.getAttribute('id');
		panel.setAttribute('aria-labelledby', tabs[i].id);
		panel.hidden = true;
	});
	tabs[0].removeAttribute('tabindex');
	tabs[0].setAttribute('aria-selected', 'true');
	panels[0].hidden = false;
}
