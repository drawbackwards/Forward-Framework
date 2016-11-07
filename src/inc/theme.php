<?php

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'forward_scripts' ) ) :
/**
 * Enqueue scripts and styles.
 */
function forward_scripts() {
	wp_enqueue_style( 'forward-style', get_stylesheet_uri() );

	// Front-end scripts
	if ( !is_admin() ) {

	  // Load minified scripts if debug mode is off
	  if ( WP_DEBUG === true ) {
	    $suffix = '';
	  } else {
	    $suffix = '.min';
	  }

	  // Load theme-specific JavaScript with versioning based on last modified time; http://www.ericmmartin.com/5-tips-for-using-jquery-with-wordpress/
	  wp_enqueue_script( 'forward-js-core', get_template_directory_uri() . '/js/core' . $suffix . '.js', array( 'jquery' ), filemtime( get_template_directory() . '/js/core' . $suffix . '.js' ), true );

	  // Conditionally load another script
	  // if ( is_singular() ) {
	  //   wp_enqueue_script( 'my-theme-extras', get_stylesheet_directory_uri() . '/js/extras' . $suffix . '.js', array( 'jquery' ), filemtime( get_template_directory() . '/js/extras' . $suffix . '.js' ), true );
	  // }
	}

	// wp_enqueue_script( 'forward-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	// wp_enqueue_script( 'forward-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
endif; // forward_scripts
add_action( 'wp_enqueue_scripts', 'forward_scripts' );

/**
 * Add stylesheet to the visual editor.
 */
function forward_add_editor_styles() {

    add_editor_style( get_stylesheet_uri() );

}
add_action( 'init', 'forward_add_editor_styles' );
