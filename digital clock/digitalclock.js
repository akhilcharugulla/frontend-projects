setInterval(itsshowTime, 1000);
function itsshowTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  ampm = "AM";

  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    ampm = "AM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  } else {
  }
  if (min < 10) {
    min = "0" + min;
  } else {
  }
  if (sec < 10) {
    sec = "0" + sec;
  } else {
  }

  let Time = hour + ":" + min + ":" + sec + " " + ampm;
  document.getElementById("don").innerHTML = Time;
}
itsshowTime();
