<?php 
/**
 * Custom Gutenber functions
 */

 function david_gutenberg_default_colors() {
    add_theme_support(
        'editor-color-palette', 
        array(
            array(
                'name' => 'Very White',
                'slug' => 'white',
                'color' => '#ffffff'
            ),
            array(
                'name' => 'Night Black',
                'slug' => 'Black',
                'color' => '#000000'
            ),            
            array(
                'name' => 'Bright Yellow',
                'slug' => 'Yellow',
                'color' => '#fff444'
            )
        )
    );

    add_theme_support(
        'editor-font-sizes', 
        array(
            array(
                'name' => 'Normal Size',
                'slug' => 'normal',
                'size' => 16
            ),
            array(
                'name' => 'Large Size',
                'slug' => 'Large',
                'size' => 24
            )
        )
    );
}

add_action('init', 'david_gutenberg_default_colors' );


function david_gutenberg_blocks() {
    wp_register_script('custom-cta-js', get_template_directory_uri() . '/build/index.js', array('wp-blocks'));

    register_block_type( 'david/custom-cta', array(
        'editor_script' => 'custom-cta-js'
    ) );


}

add_action('init', 'david_gutenberg_blocks' );