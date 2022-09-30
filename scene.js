let seconds, interval;
let normal = true;

$("#directions").hide();
$(".settings").hide();
$(".timerFormat").hide();
$(".format2").hide();
$(".demo2").hide();
$(".time").hide();
$(".barTime").hide();
$(".dementor1").hide();
$(".container").addClass("tempAnimation");

function play() {
  $("#directions").show();
  $(".startContainer").hide();
  $(".container").removeClass("tempAnimation");
  let difficulty = $("#difficulty").val();
  switch (difficulty) {
    case "Easy":
      $(".container").css("transition", "1.5s all linear");
      break;
    case "Medium":
      $(".container").css("transition", "1s all linear");
      break;
    case "Hard":
      $(".container").css("transition", "0.5s all linear");
      break;
    default:
      break;
  }
  seconds = parseInt($("#seconds").val());
  if (normal) {
    $(".time").text(`Time left: ${seconds}`);
    $(".time").show();
  } else {
    $(".barTime").show();
    $(".front1").css("animation", `demo ${seconds}s 1`);
  }
  interval = setInterval(timer, 1000);
  $(".dementor").click(gameover);
  $(".snitch").click(caught);
}

$("#play").click(play);
$("#start").click(play);

function changePos() {
  let topPos = Math.random() * 500;
  let leftPos = Math.random() * 800;
  $(".container").css("top", topPos);
  $(".container").css("left", leftPos);
}

$(".container").hover(changePos);
$(".snitch").hover(changePos);

function caught() {
  $(".snitch").css("height", "400px");
  $(".snitch").attr("src", "snitch.png");
  $("#message").text(`You caught the snitch! Great job!`);
  $("p").text(`Refresh to play again`);
  $(".front1").css("animation-play-state", "paused");
  $(".dementor").css("animation-play-state", "paused");
  $(".dementor").css("animation", "disappear 10s 1");
  $(".dementor").css("width", "0px");
  clearInterval(interval);
  $(".snitch").off();
  $(".container").off();
  $(".dementor").off();
}




function gameover() {
  $(".dementor1").show();
  $(".dementor1").css("width", "1000px");
  $(".dementor1").css("animation", "fly2 30s infinite alternate");
  $(".dementor").css("width", "1000px");
  $("#message").text(`Uh Oh! Dementors took over this page.`)
  $("p").text(`Refresh to play again`);
  $(".front1").css("animation-play-state", "paused");
  clearInterval(interval);
  $(".snitch").hide();
}


function timer() {
  seconds--;
  if (normal) {
    $(".time").text(`Time left: ${seconds}`);
  }
  if (seconds == 0) {
    $(".front1").css("width", "200px");
    $(".timer").hide();
    clearInterval(interval);
    gameover();
  }
}

function showSettings() {
  $("#name").hide();
  $("#play").hide();
  $("#settings").hide();
  $(".settings").show();
}

$("#settings").click(showSettings);

function timerFormat() {
  $(".settings").hide();
  $(".timerFormat").show();
}

$("#timerFormat").click(timerFormat);

function backSettings() {
  $(".timerFormat").hide();
  $(".settings").show();
}

$("#back1").click(backSettings);

function backHome() {
  $(".settings").hide();
  $("#name").show();
  $("#play").show();
  $("#settings").show();
}

$("#back").click(backHome);

function chooseFormat() {
  if (normal) {
    $(".format1").hide();
    $(".demo1").hide();
    $(".format2").show();
    $(".demo2").show();
    $(".front").css("animation", "demo 10s infinite");
    normal = false;
  } else {
    $(".format2").hide();
    $(".demo2").hide();
    $(".front").css("width", "0px");
    $(".format1").show();
    $(".demo1").show();
    normal = true;
  }
}

$(".chooser").click(chooseFormat);