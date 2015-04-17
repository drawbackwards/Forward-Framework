(function ($) {

	$(document).ready(function() {

		// Show mobile menu
		$('#mobile-menu-switch .toggle').click(function(event) {
			event.stopPropagation();
			$(this).toggleClass('on');
			$('#site-navigation').toggle();
			setMobileMenuHeight();
			event.preventDefault();
		});

		// Open social sharing links in new window
		$('#social-sharing a').click(function(event) {
		  window.open(this.href, '', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
		  event.preventDefault();
		});

	});

	$(window).resize(function() {
	    setMobileMenuHeight();
	});

	// Resize mobile menu to 
	function setMobileMenuHeight() {
		var headerHeight = $('#masthead').outerHeight();
		var windowHeight = window.innerHeight;
		var menuOffset = headerHeight;
		var menuHeight = windowHeight - menuOffset;

		$("#site-navigation").css("height", menuHeight);
		// .css("top", menuOffset);
	}

})(jQuery);