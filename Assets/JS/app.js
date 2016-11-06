$(document).ready(function() {

	console.log("JS is working!");

});

$(function() {
  var p1 = '<div class="Player1"></div>';
  $(".road1").append(p1);

  $(document).keydown(function(e) {

  var position = $(".Player1").position();

  switch (e.keyCode)
  {

    case 87:
      $(".Player1").css('top', position.top - 7 + 'px');
  }
});
});

//Keycodes for game - W: 87, A: 65, S: 83, D: 68, Up: 38, Left: 37, Down: 40, Right: 39.
