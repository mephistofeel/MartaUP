$(function(){

  $('.header-slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'header-slider__dots',
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.page-header__toggle').on('click', function(){
    $('.main-nav__list').slideToggle();
    $('.page-header__user-list').slideToggle();
  });

});