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