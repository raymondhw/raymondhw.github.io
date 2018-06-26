//This is for preload animation
	window.addEventListener("load", function(){
	
	var load_screen = document.getElementById("load_screen");
	document.body.removeChild(load_screen);
	
});
	// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
	

  $(document).ready(function(){
   
   $("[data-toggle='popover']").popover();
   
  });
   
  
 $(document).ready(function() {
 
  $("#owl-demo3").owlCarousel({
      autoPlay : true,
     
	  touchDrag: true,
      autoHeight : true,
     
      items : 1
     
 
  });
 
});


  
$("document").ready(function(){
	  $('.go').hover(function(){
			$('#pretty').addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				function(){
				$(this).removeClass('animated rubberBand');
				});
		});

	  $('#monmak').hover(function(){
			$('#mummy-munney').addClass('animated flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				function(){
				$(this).removeClass('animated flip');
				});
		});
		
		 $('.go').hover(function(){
			$('.ray').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				function(){
				$(this).removeClass('animated pulse');
				});
		});
	
	
	});
	
	
	
	$("document").ready(function(){
	   
	   $('#projectdeal').validate();
	
	});
	
	

       