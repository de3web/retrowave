// ==============================
// full height/width screen size div
// ==============================
window.onresize = function(event) {
  if($(window).scrollTop() + $(window).height() > $(document).height() ) {
    resizeDiv();
  }
}
function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).innerHeight();
  winh = $(window).height();
  doch = $(document).height();
  console.log('innerheight height is ' + vph);
  console.log('window height is ' + winh);
  console.log('document height is ' + doch);
  height = window.innerHeight ? window.innerHeight : $(window).height();
  var count = 0;
  if(is_screen_md()) {
    $('.adjustheight').css({
      'height': vph 
    });
    $('.adjustheight-md').css({
      'height': vph,
      'max-height': vph
    });
  } else if(is_screen_sm()) {
    $('.adjustheight-sm').css({
      'height': vph,
      'max-height': vph
       });
    $('.adjustheight').css({'height': vph });
  } else {
    $('.adjustheight').css({'height': vph });
  }
}

// ==============================
// Smooth Scrolling for Anchor Links
// ==============================
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

///////////////////////
// initialize functions
///////////////////////
$(document).ready(function(){
  // resizeDiv();
  // resize_canvas();
});
$(window).resize(function() {
  // resizeDiv();
  // resize_canvas();
});

// ==============================
// for using responsive js conditions.
// ==============================
function is_screen_sm() {
  return $('#screen-sm-min').is(':visible');
}
function is_screen_md() {
  return $('#screen-md-min').is(':visible');
}
function is_screen_lg() {
  return $('#screen-lg-min').is(':visible');
}