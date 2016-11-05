<?php
/**
 * Custom template tags for this theme.
 *
 * @package Forward
 */

$template_tags = [
	'featured-image',
	'social-links',
	'post-navigation',
	'posts-navigation',
	'posted-on',
	'entry-footer',
	'archive-title',
	'archive-description',
];

function forward_load_template_tags($template_tags) {
	foreach ($template_tags as $template_tag) {
		require get_template_directory() . '/inc/template-tags/' . $template_tag . '.php';
	}
}

forward_load_template_tags($template_tags);
