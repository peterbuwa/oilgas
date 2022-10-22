let hamburger = document.querySelector(".fa-bars");
let navBar = document.querySelector(".nav-bar");
let close = document.querySelector(".fa-times")
let bottomMenuOne = document.querySelector(".bottom-menu-one")
let bottomMenuTwo = document.querySelector(".bottom-menu-two")
let bottomMenuThree = document.querySelector(".bottom-menu-three")
let bottomMenuFour = document.querySelector(".bottom-menu-four")
let bottomMenuFive = document.querySelector(".bottom-menu-five")
let bottomMenuSix = document.querySelector(".bottom-menu-six")
let menuButtonOne = document.querySelector(".bottom-menu-one")
let menuButtonTwo = document.querySelector(".bottom-menu-two")
let menuButtonThree = document.querySelector(".bottom-menu-three")
let menuButtonFour = document.querySelector(".bottom-menu-four")
let menuButtonFive = document.querySelector(".bottom-menu-five")
let menuButtonSix = document.querySelector(".bottom-menu-six")
let buttonLinkOne = document.querySelector(".bottom-link-one")
let buttonLinkTwo = document.querySelector(".bottom-link-two")
let buttonLinkThree = document.querySelector(".bottom-link-three")
let buttonLinkFour = document.querySelector(".bottom-link-four")
let buttonLinkFive = document.querySelector(".bottom-link-five")
let buttonLinkSix = document.querySelector(".bottom-link-six")
let times = document.querySelector(".times");
let searchContainerWrapper = document.querySelector(".search-container-wrapper");
let bottomSearch = document.querySelector(".bottom-search");
let left = document.querySelector(".fa-angle-left")
let right = document.querySelector(".fa-angle-right")


let sliderIndex = 0;
plusSlides();

function plusSlides(){
    let images = document.getElementsByClassName("slider-images")
    for(i = 0; i < images.length; i++){
        images[i].style.display = "none"
    }

    sliderIndex++;
    if(sliderIndex > images.length){
        sliderIndex = 1;
    }
    images[sliderIndex - 1].style.display = "block";
    setTimeout(plusSlides, 2000)
 }




 left.addEventListener("click", function(){
     let slide = document.getElementsByClassName("slider-images");
     sliderIndex += 1;
     if (sliderIndex > slide.length){
         sliderIndex = 1;
     }

     for (let i = 0; i < slide.length; i++){
         slide[i].style.display = "none"
     }
     slide[sliderIndex - 1].style.display = "block";
 })

 right.addEventListener("click", function(){
     let slide = document.getElementsByClassName("slider-images");

     sliderIndex -= 1;
     if(sliderIndex < 1){
         sliderIndex = slide.length;
     }
     for(i = 0; i < slide.length; i++){
         slide[i].style.display = "none";
         slide[sliderIndex - 1].style.display = "block";
     }
     
 })




bottomSearch.addEventListener("click", ()=>{
    searchContainerWrapper.style.height = "100px";
    searchContainerWrapper.style.display = "flex";

})




times.addEventListener("click", ()=>{
    searchContainerWrapper.style.height = "0"
    searchContainerWrapper.style.overflow = "hidden";
    times.style.display = none;
})

buttonLinkOne.addEventListener("click", ()=>{
    menuButtonOne.style.backgroundColor = "rgb(50,50,50)";
    buttonLinkOne.style.color= "white";
    buttonLinkThree.style.color= "blue";
    buttonLinkFour.style.color= "blue";
    buttonLinkFive.style.color= "white";
    buttonLinkTwo.style.color= "white";
    buttonLinkThree.style.color= "white";
    menuButtonThree.style.backgroundColor = "black"
    menuButtonTwo.style.backgroundColor = "black"
    menuButtonFour.style.backgroundColor = "black"
    buttonLinkFour.style.color= "white";
    menuButtonFive.style.backgroundColor = "black"
    menuButtonSix.style.backgroundColor = "black"
    buttonLinkSix.style.color= "white";
})

buttonLinkTwo.addEventListener("click", ()=>{
    menuButtonTwo.style.backgroundColor= "rgb(50,50,50)"
    buttonLinkTwo.style.color= "white";
    buttonLinkThree.style.color= "white";
    buttonLinkFour.style.color= "white";
     buttonLinkFive.style.color= "white";
    buttonLinkOne.style.color= "white";
    menuButtonOne.style.backgroundColor = "black";
    menuButtonThree.style.backgroundColor = "black"
    menuButtonFour.style.backgroundColor = "black"
    menuButtonFive.style.backgroundColor = "black"
    menuButtonSix.style.backgroundColor = "black"
    buttonLinkSix.style.color= "white";
})

buttonLinkThree.addEventListener("click", ()=>{
    menuButtonThree.style.backgroundColor= "rgb(50,50,50)";
    buttonLinkThree.style.color= "white";
    buttonLinkOne.style.color= "white";
    buttonLinkFour.style.color= "white";
    buttonLinkFive.style.color= "white";
    buttonLinkTwo.style.color= "white";
    menuButtonOne.style.backgroundColor = "black";
    menuButtonTwo.style.backgroundColor = "black"
    menuButtonFour.style.backgroundColor = "black"
    menuButtonFive.style.backgroundColor = "black"
    menuButtonSix.style.backgroundColor = "black"
    buttonLinkSix.style.color= "white";
})

buttonLinkFour.addEventListener("click", ()=>{
    menuButtonFour.style.backgroundColor= "rgb(50,50,50)";
    buttonLinkFour.style.color= "white";
    buttonLinkTwo.style.color= "white";
    buttonLinkFive.style.color= "white";
    buttonLinkOne.style.color= "white";
    buttonLinkThree.style.color= "white";
    menuButtonOne.style.backgroundColor = "black";
    menuButtonTwo.style.backgroundColor = "black"
    menuButtonThree.style.backgroundColor = "black"
    menuButtonFive.style.backgroundColor = "black"
    menuButtonSix.style.backgroundColor = "black"
    buttonLinkSix.style.color= "white";
})

buttonLinkFive.addEventListener("click", ()=>{
    menuButtonFive.style.backgroundColor= "rgb(50,50,50)";
    buttonLinkFive.style.color= "white";
    buttonLinkFour.style.color= "white";
    buttonLinkOne.style.color= "white";
    buttonLinkTwo.style.color= "white";
    buttonLinkThree.style.color= "white";
    menuButtonOne.style.backgroundColor = "black";
    menuButtonTwo.style.backgroundColor = "black"
    menuButtonThree.style.backgroundColor = "black"
    menuButtonFour.style.backgroundColor = "black"
    menuButtonSix.style.backgroundColor = "black"
    buttonLinkSix.style.color= "white";
})
buttonLinkSix.addEventListener("click", ()=>{
    menuButtonSix.style.backgroundColor= "rgb(50,50,50)";
    buttonLinkSix.style.color= "white";
    buttonLinkFour.style.color= "white";
    buttonLinkFive.style.color= "white";
    buttonLinkThree.style.color= "white";
    buttonLinkTwo.style.color= "white";
    buttonLinkOne.style.color= "white";
    menuButtonOne.style.backgroundColor = "black";
    menuButtonTwo.style.backgroundColor = "black"
    menuButtonThree.style.backgroundColor = "black"
    menuButtonFour.style.backgroundColor = "black"
    menuButtonFive.style.backgroundColor = "black"
})

hamburger.addEventListener("click", ()=>{
navBar.style.width = "100%";
})

close.addEventListener("click", ()=>{
    navBar.style.width = "0%";
})

.bottomMenuOne.addEventListener("click", ()=>{

})