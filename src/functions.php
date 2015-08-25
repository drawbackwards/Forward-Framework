<?php
/**
 * Forward child theme functions and definitions
 *
 * @package Forward
 */

if ( ! function_exists( 'child_theme_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function child_theme_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Forward, use a find and replace
	 * to change 'forward-child' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'forward-child', get_template_directory() . '/languages' );

}
endif; // child_theme_setup
add_action( 'after_setup_theme', 'child_theme_setup' );

/**
* Enqueue child theme scripts and styles.
*/
function child_theme_scripts() {

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
		wp_enqueue_script( 'child-js-core', get_stylesheet_directory_uri() . '/js/core' . $suffix . '.js', array( 'child-js-plugins' ), filemtime( get_stylesheet_directory() . '/js/core' . $suffix . '.js' ), true );
		wp_enqueue_script( 'child-js-plugins', get_stylesheet_directory_uri() . '/js/plugins' . $suffix . '.js', array( 'jquery' ), filemtime( get_stylesheet_directory() . '/js/plugins' . $suffix . '.js' ), true );

	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'child_theme_scripts' );