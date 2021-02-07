//BACKGROUND SLIDER
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        autoplay: true,
        dots: true,
    });
});

//TABS
(function($) {
    $(function() {
      $('ul.decisions__tabs').on('click', 'li:not(.decisions__tab_active)', function() {
        $(this)
          .addClass('decisions__tab_active').siblings().removeClass('decisions__tab_active')
          .closest('div.container').find('div.decisions__content').removeClass('decisions__content_active').eq($(this).index()).addClass('decisions__content_active');
      });
    });
    })(jQuery);

// HAMBURGER MENU
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main_menu'),
  menuItem = document.querySelectorAll('.main_menu_item'),
  hamburger = document.querySelector('.main_hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('main_hamburger_active');
      menu.classList.toggle('main_menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('main_hamburger_active');
          menu.classList.toggle('main_menu_active');
      })
  })
})

//MODAL

$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks').fadeOut('slow');
});

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});

// PAGEUP
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
});

$("a[href=#up]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

//ANIMATIONS
new WOW().init();

//SMOOT SCROLL
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

