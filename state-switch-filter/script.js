let prevScrollTop;
let scrolling;
function scrolled(){
  let scrollTop = window.scrollY;
  let nav = document.querySelector('nav');
  if (scrollTop > prevScrollTop){
    nav.classList.add('upper');
  } else {
    nav.classList.remove('upper')  }
  prevScrollTop = scrollTop; }
document.addEventListener('scroll', function(){
  scrolling = true}, false);
setInterval(function(){
  if (scrolling){
    scrolled();
    scrolling = false;  }}, 100);