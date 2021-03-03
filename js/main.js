
 
let text = document.querySelector('.text');//larger text to read
let click = document.querySelector('.click');
let subtext = document.querySelector('.subtext');//smaller text
let btn = document.querySelector('.btn');
 
let state = 1;//start
let finalAns;//the final string output
 
//states or pages
function state0() {
    text.innerHTML = 'I can read your mind';
    click.innerHTML= '';
    subtext.innerHTML = '';
    btn.innerHTML = 'Go';
   
}
 
function state1() {
    text.innerHTML = 'Pick a number from 01-99';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'When you have your number click next';
    btn.innerHTML = '';
    addResetIcon();
}
 
function state2() {
    text.innerHTML = 'Add both digits together to get a new number';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14 is 1+4=5<br>Click next to proceed';
     btn.innerHTML = '';
    addResetIcon();
}
 
function state3() {
    text.innerHTML = 'Subtract your new number from your old number';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14-5=9<br>Click next to proceed';
     btn.innerHTML = '';
    addResetIcon();
}
 
function state4() {
    text.innerHTML = symbols(100);
    finalAns = text.textContent.slice(49, 50);
    click.innerHTML = 'Reveal';
    subtext.innerHTML = 'Find your new number<br>Note the symbol beside the nyumber';
    btn.innerHTML = '';
    addResetIcon();
}
 
function state5() {
    text.innerHTML = finalAns;
    click.innerHTML = '';
    subtext.innerHTML = `Your symbol is: ${finalAns}`;
    btn.innerHTML = '';
    addResetIcon();
}
 
function clickNext() {
    state ++;
    checkState(state);
}
 
function clickReset() {
    if (btn.getAttribute('class') === 'start') {
        state = 1;
      
        checkState(state);
    } else {
        state = 0;
      
        checkState(state);
    }
}
 
function addResetIcon() {
    btn.innerHTML = 'Reset';
   
}
 
function symbols(x) {
    let output = '';
    let sym = [];
    let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];//array
    for (i = 0; i < 9; i++) {
        let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length))));//rand num 0 - length of array
        sym.push(symChar[rand])//push into array
        symChar.splice(rand, 1);//delete that symbol from array
    }
    for (i = 0; i < x; i++) {
        let num = i;
        output += `${num} - ${sym[(i) % 9]}<br>`;//subtract 1 because arrays count from 0
    }
    return output;
}
 
//checking states
function checkState(stateNum) {
    if (stateNum == 1) {
        state1();
    }
    else if (stateNum == 2) {
        state2();
    }
    else if (stateNum == 3) {
        state3();
    }
    else if (stateNum == 4) {
        state4();
    }
    else if (stateNum == 5) {
        state5();
    }
    else {
        state6();
    }
}
 
click.addEventListener('click', clickNext);
btn.addEventListener('click', clickReset);
 
 