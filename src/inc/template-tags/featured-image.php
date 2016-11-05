<?php

if ( ! function_exists( 'forward_featured_image' ) ) :
/**
 * Display featured image when available.
 */
function forward_featured_image() {
	if ( has_post_thumbnail() ) {
	?>
	<div class="entry-featured-image">
		<?php the_post_thumbnail(); ?>
	</div> <!-- .featured-image -->
	<?php
	}
}
endif;
