let menuButton = document.getElementById('menu-button');
let closeButton = document.getElementById('menu-close');
let nav = document.querySelector('nav')

menuButton.addEventListener('click',()=>{
   nav.classList.add('open');
})

closeButton.addEventListener('click',()=>{
    nav.classList.remove('open')
})