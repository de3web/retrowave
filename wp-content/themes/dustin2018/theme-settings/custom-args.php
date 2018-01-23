<?php 
// For Increasing Maximum File Upload Size
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );


function upload_size_limit_filterw( $size ) {
return 1536000*14;//Size in Kb
}
add_filter( 'upload_size_limit', 'upload_size_limit_filterw',12 );


?>  