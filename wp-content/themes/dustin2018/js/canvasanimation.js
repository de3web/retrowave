//////////////////
//// Canvas //////
//////////////////
function resize_canvas() {
  canvas = document.getElementById("main-canvas");
  if (canvas.width  < window.innerWidth) {
    canvas.width  = window.innerWidth - 80;
  }

  if (canvas.height < window.innerHeight) {
    canvas.height = window.innerHeight - 40;
  }
}

$(document).ready(function(){

  resize_canvas();

  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");

  var randomXposition = Math.floor(Math.random() * ((canvas.width - 100) - 1 + 1)) + 1;
  var randomYposition = Math.floor(Math.random() * ((canvas.height - 100) - 1 + 1)) + 1;

  // var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  var canvasX = randomXposition;
  var canvasY = randomYposition;

  console.log('canvasX is ' + canvasX);
  console.log('canvasY is ' + canvasY);
  
  var hockeyIconWidth = 100;
  var hockeyIconHeight = 100;

  // movement speed of 2 pixels / frame
  var dx2 = 2;
  var dy2 = -2;

  // SVG Icon Variables for drawing on canvas
  var svgHockeyData = '<svg id="hockey" class="icon-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 467.488 467.488" style="enable-background:new 0 0 467.488 467.488;" xml:space="preserve">' + '<defs>' + '<linearGradient id="MyGradient" x1="0" x2="0" y1="0" y2="1">' + '<stop offset="5%"  stop-color="#23e8a9"/>' + '<stop offset="25%"  stop-color="#23e8a9"/>' + '<stop offset="95%" stop-color="#2989D8"/>' + '</linearGradient>'  + '</defs>' + '<g>' + '<g>' + '<path fill="url(#MyGradient)" d="M112.744,280.379c41.344,0,76.159-22.729,86.75-53.699v-39.556c-10.591-30.97-45.406-53.699-86.75-53.699 s-76.159,22.729-86.75,53.699v39.556C36.585,257.648,71.4,280.379,112.744,280.379z M47.659,206.901 c11.118,20.304,36.063,34.462,65.085,34.462s53.967-14.158,65.086-34.462v19.906c-11.131,20.289-36.076,34.433-65.086,34.433 c-29.011,0-53.955-14.145-65.085-34.433V206.901z"/>' + '<polygon fill="url(#MyGradient)" points="410.285,36.551 214.507,328.928 78.611,318.527 0,374.922 64.332,445.547 250.471,412.551 467.488,21.941"/>' + '</g>' + '</g>' + '</svg>';

  var svgHeart = '<svg id="heart" class="icon-svg" fill="url(#MyGradient)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve">' + '<defs>' + '<linearGradient id="MyGradient" x1="0" x2="0" y1="0" y2="1">' + '<stop offset="5%"  stop-color="#23e8a9"/>' + '<stop offset="25%"  stop-color="#23e8a9"/>' + '<stop offset="95%" stop-color="#2989D8"/>' + '</linearGradient>' + '</defs>' + '<g>' + '<path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25 c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826 c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514 c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"/>' + '<path d="M15.999,7.904c-5.514,0-10,4.486-10,10c0,0.553,0.447,1,1,1s1-0.447,1-1c0-4.411,3.589-8,8-8c0.553,0,1-0.447,1-1 S16.551,7.904,15.999,7.904z"/>' + '</g>' + '</svg>';

  var inonsArray = [svgHockeyData, svgHeart];
  var DOMURL = window.URL || window.webkitURL || window;
  var img = new Image();
  var svg = new Blob([svgHockeyData], {type: 'image/svg+xml'});
  var url = DOMURL.createObjectURL(svg);
  img.src = url;
  img.onload = function() {

    context.drawImage(img, canvasX, canvasY);
    DOMURL.revokeObjectURL(url);
  }

  function drawit() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(img, canvasX, canvasY);

    if(canvasX + dx2 > canvas.width-95 || canvasX + dx2 < -5) {
      dx2 = -dx2;
      console.log('X = bouncey bounce bounce');
      // canvas.style.borderColor = 'blue';
    }
    if(canvasY + dy2 > canvas.height-115 || canvasY + dy2 < 10) {
      dy2 = -dy2;
      console.log('Y = bouncey bounce bounce');
      // canvas.style.borderColor = 'red';
    }
    
    canvasX += dx2;
    canvasY += dy2;

  }

  setInterval(drawit, 20);

});