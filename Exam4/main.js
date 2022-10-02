"use strict";
// Show hide func //

function showHide(){
    $(".cart__modal").classList.toggle("hide")
}

function closeModal(){
    $(".cart__modal").classList.add("hide")
}

$(".cart").addEventListener("click", ()=>{
    showHide()
})

$(".close").addEventListener("click", ()=>{
    closeModal()
})


// Count ++ -- //
let count = 0;

$(".plus").addEventListener("click", ()=>{
    count++
    $(".count").innerHTML = count;
})

$(".minus").addEventListener("click", ()=>{
    if(count > 0){
        count--
        // $("#modal__count").innerHTML = count;
        // let total = count * 125;
        // $("#total__price").innerHTML = `$${total}`;
    }
    $(".count").innerHTML = count;
})

// Add to cart //
$(".orange__btn").addEventListener("click", ()=>{
    if(count > 0){
        let total = count * 125;
        $("#total__price").innerHTML = `$${total}`;
        $("#modal__count").innerHTML = count;
        $(".cart__modal").classList.remove("hide");
        $(".cart__modal__content").classList.remove("hide");
        $(".modal__txt").classList.add("hide");
    }else{
        alert("Kamida bir dona bo'lishi kerak")
    }
    
})

// Delete //
$(".delete").addEventListener("click", ()=>{
    $(".cart__modal__content").classList.add("hide");
    $(".modal__txt").classList.remove("hide");
})

// Slider //
let index = 0;



function slider() {
   if (index > $a('.slide-item').length - 1) {
      index = 0
   }

   if (index < 0) {
      index = $a('.slide-item').length - 1;
   }

   $('.slide-list').style.transform = `translateX(-${index*445}px)`;
}

$('.next').addEventListener('click', () => {
   index++;
   slider()
})

$('.prev').addEventListener('click', () => {
   index--;
   slider()
})


setInterval(() => {
   index++;
   slider()
}, 2000)


// Menu //
$("#menu").addEventListener("click", ()=>{
    $(".mobile__nav").style.transform = "translateX(0%)";
})

$(".mobile__nav").addEventListener("click", ()=>{
    $(".mobile__nav").style.transform = "translateX(-100%)";
})

$(".mobile__menu__close").addEventListener("click", ()=>{
    $(".mobile__nav").style.transform = "translateX(-100%)";
})

// Dark mode //
$(".dark__mode").addEventListener("click", ()=>{
    $("body").classList.toggle("body__dark");
    $("nav").classList.toggle("border__light");
    $("#content__title").classList.toggle("color__white");
    $("#content__price").classList.toggle("color__white");
    $(".cart__modal").classList.toggle("bg__gray");
})











 
 
 
 