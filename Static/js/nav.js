//Buttons
let navToggle = document.querySelector(".btn-hamburger");
let navClose = document.querySelector(".close-nav");
let cover = document.querySelector(".cover");
//Document elements
let nav = document.querySelector("nav");



//Event listeners


navToggle.addEventListener('click', _ => {
    if(nav.getBoundingClientRect().width > 0){
        cover.classList.add("hide");
        nav.style.width = '0px';
    } else {
        if(window.innerWidth <= 500){
            document.documentElement.style.setProperty('--max-width', '100vw');
            nav.style.width = '100vw';
        } else {
            document.documentElement.style.setProperty('--max-width', '30vw');
            nav.style.width = '30vw';
        }
        cover.classList.remove("hide");
    }
    
});

navClose.addEventListener('click', _ => {
     cover.classList.add("hide");
     nav.style.width = '0px';
 });