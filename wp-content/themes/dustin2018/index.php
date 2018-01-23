<?php get_header(); ?>
<div class="col-md-12">
    <h1><?php the_title(); ?></h1>
</div>
<div class="col-md-12">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <?php include (TEMPLATEPATH . '/includes/posts.php'); ?>
            <?php endwhile; ?>
            <?php endif; wp_reset_query(); ?>
</div><!--col-md-12 -->
<?php get_footer(); ?>