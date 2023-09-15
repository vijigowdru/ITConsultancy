// pop-up code

let pop = document.querySelector(".pop-up")
let services =  document.getElementById("services")

services.addEventListener("mouseover" , ()=>{
    pop.style.display="block"
})

services.addEventListener("mouseout" , ()=>{
    pop.style.display="none"
})



// nav effect code


let nav = document.querySelector("nav")




window.onscroll=function(){

    if(scrollY>0)
    {
       
        nav.classList.add("scrolled")
    }
    else
    {
        nav.classList.remove("scrolled")
    
    }
}
