$( "#demo").mouseenter(function() {
  $(this).stop().animate({
    fontSize: "42",
    color: "#ff0000"
  }, 200, 'swing', function() {
    // Animation complete.
  });
});
$( "#demo").mouseleave(function() {
  $(this).stop().animate({
    fontSize: "32",
    color: "#0000ff"
  }, 200, 'swing', function() {
    // Animation complete.
  });
});
$( "#clickme3" ).click(function() {
  $( "#memes" ).stop().animate({
    fontSize: "+=40",
    color: "#ff0000"
  }, 2000, 'easeOutBounce', function() {
    // Animation complete.
  });
});
$( "#clickme4" ).click(function() {
  $( "#memes" ).stop().animate({
    fontSize: "-=40",
    color: "#0000ff"
  }, 2000, 'easeOutBounce', function() {
    // Animation complete.
  });
});
