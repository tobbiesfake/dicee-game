var player1;
var player2;

$("button").click(function() {
  player1 = Math.floor(Math.random() * 6) + 1;
  player2 = Math.floor(Math.random() * 6) + 1;
  $("h5").html("...");
  setTimeout(function() {
    rollTheDicee(player1, player2);
  }, 700);
  setTimeout(function() {
    theWinner(player1, player2);
  }, 750);
})

function theWinner(p1, p2) {
  if (p1 > p2) {
    $("h5").html("Player 1 wins");
  } else if (p1 < p2) {
    $("h5").html("Player 2 wins");
  } else if (p1 === p2) {
    $("h5").html("DRAW!");
  }
}

function rollTheDicee(p1, p2) {

  $(".dot").removeClass("dot_bg_color");
  $(".dot").addClass("dice_bg_color");

  switch (p1) {
    case 1:
      $(".one1").removeClass("dice_bg_color");
      $(".one1").addClass("dot_bg_color");
      break;
    case 2:
      $(".two1").removeClass("dice_bg_color");
      $(".two1").addClass("dot_bg_color");
      break;
    case 3:
      $(".three1").removeClass("dice_bg_color");
      $(".three1").addClass("dot_bg_color");
      break;
    case 4:
      $(".four1").removeClass("dice_bg_color");
      $(".four1").addClass("dot_bg_color");
      break;
    case 5:
      $(".five1").removeClass("dice_bg_color");
      $(".five1").addClass("dot_bg_color");
      break;
    case 6:
      $(".six1").removeClass("dice_bg_color");
      $(".six1").addClass("dot_bg_color");
      break;

    default:

  }
  switch (p2) {
    case 1:
      $(".one2").removeClass("dice_bg_color");
      $(".one2").addClass("dot_bg_color");
      break;
    case 2:
      $(".two2").removeClass("dice_bg_color");
      $(".two2").addClass("dot_bg_color");
      break;
    case 3:
      $(".three2").removeClass("dice_bg_color");
      $(".three2").addClass("dot_bg_color");
      break;
    case 4:
      $(".four2").removeClass("dice_bg_color");
      $(".four2").addClass("dot_bg_color");
      break;
    case 5:
      $(".five2").removeClass("dice_bg_color");
      $(".five2").addClass("dot_bg_color");
      break;
    case 6:
      $(".six2").removeClass("dice_bg_color");
      $(".six2").addClass("dot_bg_color");
      break;

    default:

  }
}
