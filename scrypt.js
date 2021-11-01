const hourLabel = document.querySelector(".watch");
const timeNow = new Date();

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const day4 = document.querySelector(".day4");
const day5 = document.querySelector(".day5");
const day6 = document.querySelector(".day6");
const day7 = document.querySelector(".day7");

const soundClock = new Audio("sounds/clockStrike.wav");

function changeDay() {
  let todayDay = timeNow.getDay();
  if (todayDay === 1) return (day1.style.color = "white");
  if (todayDay === 2) return (day2.style.color = "white");
  if (todayDay === 3) return (day3.style.color = "white");
  if (todayDay === 4) return (day4.style.color = "white");
  if (todayDay === 5) return (day5.style.color = "white");
  if (todayDay === 6) return (day6.style.color = "white");
  if (todayDay === 0) return (day7.style.color = "white");
  console.log(todayDay);
}
changeDay();

function intervalTime() {
  const timeNow = new Date();
  let hourNow = (timeNow.getHours() < 10 ? "0" : "") + timeNow.getHours();
  let minNow = (timeNow.getMinutes() < 10 ? "0" : "") + timeNow.getMinutes();
  let secNow = (timeNow.getSeconds() < 10 ? "0" : "") + timeNow.getSeconds();
  if (minNow == 00 && secNow == 00) {
    soundClock.play() &&
      (hourLabel.innerHTML = `${hourNow}:${minNow}:${secNow}`);
  }
  if (hourNow == 00 && minNow == 00 && secNow == 00) {
    changeDay();
  }
  return (hourLabel.innerHTML = `${hourNow}:${minNow}:${secNow}`);
}

const createClock = setInterval(intervalTime, 1000);
