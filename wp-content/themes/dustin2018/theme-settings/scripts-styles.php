<?php

function load_theme_styles() {
    global $wp_styles;

    // wp_register_style('boot-css', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '1.0', 'all');
    wp_register_style('main-css', get_template_directory_uri() . '/style/style.css', array(), '1.0', 'all');

    // wp_enqueue_style('boot-css'); 
    wp_enqueue_style('main-css'); 
    // $fontGroup = ['Diplomata+SC']
    $fontGroup = 'Diplomata+SC';
    // wp_enqueue_style('random-font', 'https://fonts.googleapis.com/css?family='. $fontGroup);

}

add_action( 'wp_enqueue_scripts', 'load_theme_styles' );

function reset_jquery() {
    wp_deregister_script('jquery');
    
    $version = '1.11.1';
    $src = '//ajax.googleapis.com/ajax/libs/jquery/' . $version . '/jquery.min.js';

    // wp_enqueue_script('jquery', $src, false, $version, true);
}

function load_theme_scripts() {
    global $wp_scripts;

    reset_jquery(); // use most recent version

    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {

        wp_register_script('three-js', get_template_directory_uri() . '/js/three.min.js', array(), '1.0.0', true);

        wp_register_script('retrowave-three-js', get_template_directory_uri() . '/js/retrowave.js', array('three-js'), '1.0.0', true);
        wp_register_script('mainscript', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);

        wp_enqueue_script('three-js');
        wp_enqueue_script('retrowave-three-js');
        // wp_enqueue_script('mainscript'); 
    }
}


add_action( 'wp_enqueue_scripts', 'load_theme_scripts' );
?>