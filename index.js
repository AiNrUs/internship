var sidenav=document.querySelector(".side-navbar")

 function showNavBar(){
 sidenav.style.display="inline"
 }
 function closeNavBar(){
  sidenav.style.display="none"  
 }

let index = 0;
const items = document.querySelectorAll('.testimonial');

function updateSlide() {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function next() {
  index = (index + 1) % items.length;
  updateSlide();
}

function prev() {
  index = (index - 1 + items.length) % items.length;
  updateSlide();
}
setInterval(next, 7000);
updateSlide();

