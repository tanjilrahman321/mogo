$(document).ready(function(){

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Slick Slider jq
      $('.autoplay').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      // Aos Js
      AOS.init({
        offset: 120,
        duration: 1000,
      });

});
