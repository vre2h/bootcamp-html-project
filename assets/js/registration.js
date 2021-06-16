let timeZone = document.querySelectorAll(".num");

let countDownDate = new Date("July 01, 2021 00:00:00").getTime();

let interval = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeZone[0].textContent = days;
  timeZone[1].textContent = hours;
  timeZone[2].textContent = minutes;
  timeZone[3].textContent = seconds;

  if (distance < 0) {
    clearInterval(interval);
  }
}, 1000);
