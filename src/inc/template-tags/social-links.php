<?php

if ( ! function_exists( 'forward_social_links' ) ) :
/**
 * Show social links on post using the permalink.
 */
function forward_social_links() {

	?>
	<ul class="social-sharing" id="social-sharing">
	  <li class="facebook"><a href="http://www.facebook.com/share.php?u=<?php echo wp_get_shortlink() ?>&title=<?php echo get_the_title() ?>" data-title="<?php echo get_the_title() ?>" title="Share on Facebook">Share on Facebook</a></li>
	  <li class="twitter"><a href="http://twitter.com/home?status=<?php echo get_the_title() ?>+<?php echo wp_get_shortlink() ?>" data-title="<?php echo get_the_title() ?>" title="Share on Twitter">Share on Twitter</a></li>
	  <li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo wp_get_shortlink() ?>&title=<?php echo get_the_title() ?>" data-title="<?php echo get_the_title() ?>" title="Share on LinkedIn">Share on LinkedIn</a></li>
	</ul>
	<?php
}
endif;
