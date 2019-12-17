(function($) {

  "use strict";

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /*
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    });

    $(window).on('load', function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 40) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });
    });

    // Slick Nav
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',
    });


/*
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/*
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

/*
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/*
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 2) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/*
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /*
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/*
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================*/
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/*
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();


  /*
   Filter
   ========================================================================== */

   $(document).ready(function () {

    //////////////////
    var xyz=$('.selectSize').data('name');
    $('.selectSize').select2({placeholder : xyz});
    $('.selectSize').on('select2:close', function (evt) {
      var uldiv = $(this).siblings('span.select2').find('ul')
      var count = $(this).select2('data').length
      if(count==0){
        uldiv.html(xyz)
        }
        else{
        uldiv.html("<li>"+xyz+"("+count+")</li>")
        }
      });
    //////////////////
    var xyz2=$('.selectMaterial').data('name');
    $('.selectMaterial').select2({placeholder : xyz2});
    $('.selectMaterial').on('select2:close', function (evt) {
      var uldiv = $(this).siblings('span.select2').find('ul')
      var count = $(this).select2('data').length
      if(count==0){
        uldiv.html(xyz2)
        }
        else{
        uldiv.html("<li>"+xyz2+"("+count+")</li>")
        }
      });
    //////////////////
    var xyz3=$('.selectPrinting').data('name');
    $('.selectPrinting').select2({placeholder : xyz3});
    $('.selectPrinting').on('select2:close', function (evt) {
      var uldiv = $(this).siblings('span.select2').find('ul')
      var count = $(this).select2('data').length
      if(count==0){
        uldiv.html(xyz3)
        }
        else{
        uldiv.html("<li>"+xyz3+"("+count+")</li>")
        }
      });
    //////////////////
    var xyz4=$('.selectOption5').data('name');
    $('.selectOption5').select2({placeholder : xyz4});
    $('.selectOption5').on('select2:close', function (evt) {
      var uldiv = $(this).siblings('span.select2').find('ul')
      var count = $(this).select2('data').length
      if(count==0){
        uldiv.html(xyz4)
        }
        else{
        uldiv.html("<li>"+xyz4+"("+count+")</li>")
        }
      });
    //////////////////
    var xyz5=$('.selectColor').data('name');
    $('.selectColor').select2({placeholder : xyz5});
    $('.selectColor').on('select2:close', function (evt) {
      var uldiv = $(this).siblings('span.select2').find('ul')
      var count = $(this).select2('data').length
      if(count==0){
        uldiv.html(xyz5)
        }
        else{
        uldiv.html("<li>"+xyz5+"("+count+")</li>")
        }
      });
    //////////////////

      });
  }(jQuery));

