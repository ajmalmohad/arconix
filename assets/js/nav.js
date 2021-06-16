let hamburger = document.getElementsByClassName('hamburger')[0];
let navbar = document.getElementsByClassName('navlinks')[0];
let active = false;

hamburger.addEventListener('click',()=>{
    active = !active;
    if(active){
        hamburger.style.opacity = 0;
        setTimeout(function(){ 
        hamburger.innerHTML = "<img src='./assets/images/icon-close.svg'/>";
        hamburger.style.opacity = 1;
        },300)
    }else{
        hamburger.style.opacity = 0;
        setTimeout(function(){ 
        hamburger.innerHTML = "<img src='./assets/images/icon-hamburger.svg'/>"; 
        hamburger.style.opacity = 1;
        },300)
    }
    navbar.classList.toggle("active");
})