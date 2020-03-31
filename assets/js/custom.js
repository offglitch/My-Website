/*-----------------------------------------------------------------------------------------------------

This is main JS file that contains custom Javascript rules used in this template
---------------------------------------------------------------------------------------------------------------------------------
Template Name: "Sarwan"
Version: 1.0 Initial Release
Copyright: (C) 2018
----------------------------------------------------------------------------------------------------*/
$(function($) {
"use strict";	

$(window).on('scroll load', function() { 

// header shrink 
	var header = $('.inner');
	if ($(this).scrollTop() > 60) {
		header.addClass("fixed");
	}
	else {
		header.removeClass("fixed");
	}

// Go-Top
	var headers = $('.go-top');
	if ($(this).scrollTop() > 500) {
		headers.addClass("active");
	}
	else {
		headers.removeClass("active");
	}

});

// Slider
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 0,
		speed: 500,
		loop: true,
		effect: 'slide',
		autoplay: 5000,
		autoplayDisableOnInteraction: false
	});

// Menu
	$('.open-menu').on('click', function() {
		$('.overlay').addClass('open');
	});

	$('.overlay a').on('click', function() {
		$('.overlay').removeClass('open');
	});

// Blog Slider
	$('.blog .owl-carousel').owlCarousel({
		items: 3,
		margin: 15,
		loop: true,
		nav: false,
		dots: true,
		autoHeight: true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          }
        }
	});

// Filter
	$(".fil-btn").on('click', function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

	$('.filter_menu li a').on('click', function(){
    	$('li a.active').removeClass('active');
    	$(this).addClass('active');
	});
    
// Magnific Popup
	$('.project_gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
		delegate: 'a', // the selector for gallery item
		type: 'image',
		gallery: {
		  enabled:true
		}
		});
	});

//Smooth Scroll
    $('.overlay-menu a[href*="#"]:not([href="#"])').on('click', function(){
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 53
          }, 1000);
          return false;
        }
      }
    });


});
