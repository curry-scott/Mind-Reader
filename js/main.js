et text = document.querySelector(".text");
let click= document.querySelector(".click");
let subtext = document.querySelector(".subtext");
let btn= document.querySelector("Start");

let slide = 1;

function slide1() {
    text.innerHTML = "I can read your mind";
    click.innerHTML = "Go";
    
}

function slide2() {
    text.innerHTML = "Pick a number 1-99";
    click.innerHTML = "Next";
    subtext.innerHTML = "When you have your number, click next";

}

    function slide3() {
        text.innerHTML = "Add both digits together to get a new number";
        click.innerHTML = "Next";
        subtext.innerHTML = "Ex: 14 is 1+4=5"<br>"Click next to proceed";
    
}

function slide4() {
    text.innerHTML = "Subtract your new number from the original number";
    click.innerHTML = "Next";
    subtext.innerHTML = "Ex 14-5=p"<br>"Click next to proceed";

}

function slide5() {
    text.innerHTML = Symbol(10); 
    finalanswer = text.textContent.slice(9,10); // distributes final answer 
    click.innerHTML = "Reveal";
    subtext = " Find your new number"<br>"Note the symbol beside the number";

}

function slide6() {
    text.innerHTML = finalanswer;
    subtext.innerHTML = "Your symbol is: ${finalanswer}";

}

let final;

function clickNext() {
    slide ++;
    checkSlide(slide);
}

function clickReset() {
    if (btn.getAttribute("class")=== "Start") {
        slide = 2;
        btn.setAttribute ("class", "reset");
        checkSlide(slide);
    } 
    else {
        slide = 1;
        btn.setAttribute("class", "Go");
        checkSlide(slide);
    }
}


