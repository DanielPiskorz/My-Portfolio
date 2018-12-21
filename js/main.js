// Menu-toggle button

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });

});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }
  else {
        $('nav').removeClass('black');
       
  }

  let scroll = $(window).scrollTop();

  if(scroll > 400){
    $('.logo').fadeIn('slow');
  }else{
    $('.logo').fadeOut('slow');
  }
})

// Navbar links scrolling

$(function(){
  $('li a').on('click',function(e){
    e.preventDefault();

    const navbarOffset = 120;
    $('html, body').animate({
      
      scrollTop: ($($(e.target).attr("href")).offset().top - navbarOffset) < 0 ?
        0 : ($($(e.target).attr("href")).offset().top - navbarOffset)
    }, 1000);
  });
});