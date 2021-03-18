

let btn = document.querySelector('.arrow')
//
function magic() {
  if (window.pageYOffset > 700) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
	window.scrollTo(0,0)
};

// When scrolling, we run the function
window.onscroll = magic

$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top < 120) $(".tools").css({top: '0', position: 'relative'});
  else $(".tools").css({top: '0px', position: 'fixed', width: '100%'});
});


var swiper = new Swiper('.swiper-container', {
     loop: true,
     centeredSlides: true,
     slidesPerView: 1.4,
      spaceBetween: 32,
      pagination: {
        el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1665: {
            slidesPerView: 1.2,
        },
        1666: {
            slidesPerView: 1.4,
        },
        1800: {
            slidesPerView: 1.6,
        },
        2100: {
            slidesPerView: 1.4,
        },
      }
});


