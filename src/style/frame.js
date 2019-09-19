const angry = document.getElementById("angry");
const body = document.getElementsByTagName("body");
var game = true;
console.log(body);
var x = "30";
var tmp = 30;
var pp = 0;

document.body.onkeyup = function(e) {
  var key = e.keyCode;
  if (key == 68 || key == 70 || key == 74 || key == 75) {
    plus();
  }
  if (pp == 1) {
    if (Boolean(key)) {
      plus();
    }
  }
};

function plus() {
  if (game == true) {
    if (tmp >= 950) {
      console.log("done");
    } else {
      console.log(x);
      tmp += 0.5;
      x = tmp;
      angry.style.width = x + "px";
      angry.style.height = x + "px";
    }
  }
}

function allkey() {
  pp = 1;
  setTimeout(() => {
    pp = 0;
  }, 5000);
}

if (game == true) {
  var counter = {};
  window.addEventListener("load", function() {
    counter.end = 60;
    counter.min = document.getElementById("cd-min");
    counter.sec = document.getElementById("cd-sec");

    if (counter.end > 0) {
      counter.ticker = setInterval(function() {
        counter.end--;
        if (counter.remain <= 0) {
          clearInterval(counter.ticker);
        }
        var secs = counter.end;
        var mins = Math.floor(secs / 60);
        secs -= mins * 60;

        counter.sec.innerHTML = secs;
      }, 1000);
    }
  });
}
