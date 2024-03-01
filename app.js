// for mobile navbar
window.onload = function(){
    window.addEventListener('scroll', function (e){
      if (window.pageYOffset > 100){
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  const menu_btn = document.querySelector('.hamburger');
  
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  });
} 
// for fixed desktop nav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.padding = "1rem 1rem";
    document.getElementById("nav").style.boxShadow = "0rem  .1rem 1rem   #4d4d50";    document.getElementById("nav").style.transition = "0.4s";
  } else {
    // document.getElementById("navbar").style.padding = "10px 20px";
    // document.getElementById("navbar").style.marginBottomBottom = " 30px";
    document.getElementById("nav").style.boxShadow = "0rem  0rem 0rem  ";
  }
}


(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
 
  let birthday = "Nov 1, 2024 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;
 
      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
 
      //do something later when date is reached
      // if (distance < 0) {
      //   let headline = document.getElementById("headline"),
      //     countdown = document.getElementById("countdown"),
      //     content = document.getElementById("content");
 
      //   headline.innerText = "It's my birthday!";
      //   countdown.style.display = "none";
      //   content.style.display = "block";
 
      //   clearInterval(x);
      // }
      //seconds
    }, 0);
})();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}