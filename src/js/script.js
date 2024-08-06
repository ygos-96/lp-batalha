document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      if (window.innerWidth < 992) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });

  window.addEventListener('scroll', function () {
    if (window.innerWidth < 992 && $('#navbarNav').hasClass('show')) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  $(document).ready(function () {
    new Swiper('.swiper-container-jurados', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-jurados',
        prevEl: '.swiper-button-prev-jurados',
      },
      pagination: {
        el: '.swiper-pagination-jurados',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
});
