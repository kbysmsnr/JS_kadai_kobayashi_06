$(window).on("load", function() {
  $(".janken").on("click", function() {
    janken();
    var win = parseInt($(".win_count").text());
    var lose = parseInt($(".lose_count").text());
    var win_per = (win/(win + lose)) * 100;
    if (!Number.isNaN(win_per)) {
      $(".win_per").text(Math.floor(win_per));
    }
  });
});


function janken() {
  var player_hand = $(':radio[name="janken"]:checked').val();
  var program_hand = Math.floor(Math.random() * 3);
  var jankens = ["グー", "チョキ", "パー"];
  if (!!player_hand === false) {
      alert("手を選んでください！")
  } else {
    $(".show_player_hand").html(jankens[player_hand]);
    $(".show_program_hand").html(jankens[program_hand]);
    if (player_hand == program_hand) {
      $(".result").html("あいこ");
      get_result(".quits_count");
    } else if ((player_hand == 0 && program_hand == 1) || (player_hand == 1 && program_hand == 2) || (player_hand == 2 && program_hand == 0)) {
      $(".result").html("勝ち");
      get_result(".win_count");
    } else {
      $(".result").html("負け");
      get_result(".lose_count");
    }
  }
}

function get_result(element) {
  result = parseInt($(element).text());
  result ++;
  $(element).text(result);
}
