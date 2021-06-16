setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "EXP";
    document.getElementById("hour").innerHTML = "EXP";
    document.getElementById("min").innerHTML = "EXP";
    document.getElementById("sec").innerHTML = "EXP";
  }
}, 1000);

const countDownDate = new Date("July 9, 2021 13:38:25").getTime();
