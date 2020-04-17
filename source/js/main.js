

$(function(){

  new WOW().init();

  $('.header-slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'header-slider__dots',
    vertical: true,
    autoplay: true,
    autoplaySpeed: 8000,
    lazyLoad: 'ondemand'
  });

  $('.reviews__list').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 8000
        }
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 6000
        }
      }
    ]  
    
  });

  $('.page-header__toggle').on('click', function(){
    $('.main-nav__list').slideToggle(),
    $(this).toggleClass("page-header__toggle--active");
  });

  $('.page-header__user-icon').on('click', function(){
    $('.page-header__user-list').slideToggle();
  });

});