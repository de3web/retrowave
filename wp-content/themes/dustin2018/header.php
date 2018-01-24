<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php wp_title(''); ?></title>

    <link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/img/favicon.ico">   
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!--[if lte IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->   
    <!-- GOOGLE FONT -->
    <script id="vertexShader" type="x-shader/x-vertex">
        uniform vec3 viewVector;
        uniform float c;
        uniform float p;
        varying float intensity;
        void main() 
        {
            vec3 vNormal = normalize( normalMatrix * normal );
            vec3 vNormel = normalize( normalMatrix * viewVector );
            intensity = pow( c - dot(vNormal, vNormel), p );
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    </script>
    <script id="fragmentShader" type="x-shader/x-vertex"> 
        uniform vec3 glowColor;
        varying float intensity;
        void main() 
        {
            vec3 glow = glowColor * intensity;
            gl_FragColor = vec4( glow, 1.0 );
        }
    </script>
<?php wp_head(); ?>
</head>
<?php 
$adminBarAdjust = '';
if( is_admin_bar_showing() ) {
    $adminBarAdjust = 'top:32px;';
}
?>
<body>
    
