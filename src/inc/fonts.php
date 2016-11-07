<?php

if ( ! function_exists( 'forward_google_fonts' ) ) :
/**
 * Adds google font support.
 *
 */
function forward_google_fonts() {
	$query_args = array(
		'family' => 'Source+Sans+Pro:200,300,400,600',

		// Here's an example for changing fonts.
		//
		// 'family' => 'Open+Sans:400,700|Oswald:700',
		// 'subset' => 'latin,latin-ext',
	);

	wp_register_style( 'source-sans', add_query_arg( $query_args, "//fonts.googleapis.com/css" ), array(), null );

	wp_enqueue_style('source-sans');
}
endif; // forward_google_fonts
add_action('wp_enqueue_scripts', 'forward_google_fonts');
