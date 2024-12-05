'use strict';

// TOGGLE FOR HAMBURGER MENU ON MOBILE VERSION - START
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// TOGGLE FOR HAMBURGER MENU ON MOBILE VERSION - END

// COUNTDOWN TIMER - START
// Set the date we're counting down to
let countDownDate = new Date("Feb 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  // Calculate days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = (days < 10 ? '0' : '') + days;
  document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
  document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Pendaftaran Telah Ditutup";
  }
}, 1000);
// COUNTDOWN TIMER - END
