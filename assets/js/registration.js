// Timer
let timeZone = document.querySelectorAll(".timer-digit");

let countDownDate = new Date("July 21, 2021 00:00:00").getTime();

let intervalId = setInterval(() => {
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
    clearInterval(intervalId);
  }
}, 1000);

// Input
const phoneInput = document.getElementById("reg-phone-input");
phoneInput.addEventListener("focus", () => {
  phoneInput.classList.add("animate-border");
  phoneInput.placeholder = "";
});

phoneInput.addEventListener("focusout", () => {
  phoneInput.classList.remove("animate-border");
  phoneInput.placeholder = "Phone number";
});
