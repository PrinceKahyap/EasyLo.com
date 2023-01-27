$(".carousel").owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    autoplay: true,
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

//  sticky-header 
 window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 20);
 });

// hamburger 
 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

 hamburger.addEventListener("click",mobileMenu);

 function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
 };
 const navLink = document.querySelectorAll(".nav-link");

 navLink.forEach(n => n.addEventListener("click", closeMenu));

 function closeMenu() {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
 };

//  toptoscroll 
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}