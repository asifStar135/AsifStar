//typing code
let typed = new Typed(".typing", {
    strings: ["Coder!","C++ Programmer!", "Problem Solver!", "Fullstack Web Developer!"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})

//swipper
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });