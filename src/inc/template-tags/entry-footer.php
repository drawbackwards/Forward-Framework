<?php

if ( ! function_exists( 'forward_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function forward_entry_footer() {
	// Hide category and tag text for pages.
	if ( 'post' == get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( __( ', ', 'forward' ) );
		if ( $categories_list && forward_categorized_blog() ) {
			printf( '<span class="cat-links">' . __( 'Posted in %1$s', 'forward' ) . '</span>', $categories_list );
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', __( ', ', 'forward' ) );
		if ( $tags_list ) {
			printf( '<span class="tags-links">' . __( 'Tagged %1$s', 'forward' ) . '</span>', $tags_list );
		}
	}

	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( __( 'Leave a comment', 'forward' ), __( '1 Comment', 'forward' ), __( '% Comments', 'forward' ) );
		echo '</span>';
	}

	edit_post_link( __( 'Edit', 'forward' ), '<span class="edit-link">', '</span>' );
}
endif;
