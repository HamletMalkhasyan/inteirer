var btn= document.querySelector(".btn");
var navbar = document.querySelector(".navbar");

btn.addEventListener("click",()=>{

    btn.classList.toggle("btn_active");
    navbar.classList.toggle("navbar_active")
})