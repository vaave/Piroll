const header = document.querySelector(".header");
const headerBody = document.querySelector(".header__body");

window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;
   
   if (scrollPos > 0) {
      header.classList.add("scroll");
   } else {
      header.classList.remove("scroll");
   };  
});

function openModal() {
   var screenWidth = window.innerWidth;
 
   if (screenWidth > 425) {
     document.getElementById("myModal").style.display = "block";
   }
   
   document.getElementById("img01").src = event.target.src;
   document.getElementById("img02").src = event.target.src;
   document.getElementById("img03").src = event.target.src;
   document.getElementById("img04").src = event.target.src;
   document.getElementById("img05").src = event.target.src;
   document.getElementById("img06").src = event.target.src;
   document.getElementById("img07").src = event.target.src;
   document.getElementById("img08").src = event.target.src;
   document.getElementById("img09").src = event.target.src;
 }
 
 function closeModal() {
   document.getElementById("myModal").style.display = "none";
 }

const showMore = document.querySelector('.works__button');
const productsLength = document.querySelectorAll('.works__item').length;
let items = 8;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.works__inner').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.toggle('visible'));
});

$(document).ready(function(){
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   let slider = $(".works__inner");
  
   if ($(window).width() < 426) {
     slider.slick({
       autoplay: false,
       centerMode: true,
       speed: 1200,
     });
   }

   $('.review__inner').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      speed: 1000,
   });


   $('.projects__inner').slick({
      dots: true,
      autoplay: false,
   });

});