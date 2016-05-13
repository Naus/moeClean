$( document ).ready(function() {

  // funcitions to call ----------------------

  $(function() {
  	smoothScroll(300);
  });


  // smoothScroll function ----------------------

  function smoothScroll (duration) {
  	$('a[href^="#"]').on('click', function(event) {

  	    var target = $( $(this).attr('href') );

  	    if( target.length ) {
  	        event.preventDefault();
  	        $('html, body').animate({
  	            scrollTop: target.offset().top
  	        }, duration);
  	    }
  	});
  }

});
