$(document).ready(function() {

	console.log("JS is working!");

});

var playerOneWinner = 0;
var playerTwoWinner = 0;

$(function() {
  var p1 = '<div class="Player1"></div>';
  $(".road1").append(p1);

  $(document).keydown(function(e) {

  var position = $(".Player1").position();

  switch (e.keyCode)
  {
    case 87:
      $(".Player1").css('top', position.top - 7 + 'px');
      playerOneWinner = playerOneWinner+5;
  }

	if (playerOneWinner <= 580) {
} else {
	var winScroll = '<marquee behavior="scroll" direction="left" scrollamount="15" class="banner"><h2>Developer 1 Saves The Day!</h2></marquee>';
	$(".winnerScroll").append(winScroll);
	playerOneWinner = 0;
	playerTwoWinner = -580;
	return;
}
});
});

$(function() {
  var p1 = '<div class="Player2"></div>';
  $(".road2").append(p1);

  $(document).keydown(function(e) {

  var position = $(".Player2").position();

  switch (e.keyCode)
  {

    case 38:
      $(".Player2").css('top', position.top - 7 + 'px');
			playerTwoWinner = playerTwoWinner+5;
  }

	if (playerTwoWinner <= 580) {
} else {
	 var winScroll = '<marquee behavior="scroll" direction="left" scrollamount="15" class="banner"><h2>Developer 2 Saves The Day!</h2></marquee>';
	 $(".winnerScroll").append(winScroll);
	 playerTwoWinner = 0;
	 playerOneWinner = -500;
	 return;
}
});
});
//Keycodes for game - W: 87, A: 65, S: 83, D: 68, Up: 38, Left: 37, Down: 40, Right: 39.
