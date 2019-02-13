jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
    $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
     var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
      $animatable.removeClass('animatable').addClass('animated');
        }
    });
  
    };
  
  // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
  
  });


  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
	(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/588899b946ba805858264a09/default';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
	})();
	$(".burger").click(function(){
	$(".navbar-text").toggleClass("active");
  } );
  
