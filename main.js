$(".carousel").owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
     0:{
         items: 1,
         nav: false
     },
     600:{
         items: 2,
         nav: false
     },
     1000:{
         items: 3,
         nav: false
     },
    }
 });
 
 window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 20);
 });