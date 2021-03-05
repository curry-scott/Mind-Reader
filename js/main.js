// declaring variables
let text = document.querySelector('.text');
let click = document.querySelector('.click');
let subtext = document.querySelector('.subtext');
let btn = document.querySelector('.go');

let state = 1; // stating on state 1
let finalAns; // string output for final

// generating random symbol
function symbols(x) {
    let output = '';
    let sym = [];
    let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
    for (i = 0; i < 9; i++) {
        let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length)))); // rand num 0-1 - length of array
        sym.push(symChar[rand]) // push into array
        symChar.splice(rand, 1); // delete that symbol from array
    }
    for (i = 0; i < x; i++) {
        let num = i;
        output += `${num} - ${sym[(i) % 9]}<br>`; // subtract 1 because arrays count from 0
    }
    return output;
}

// states
function state1() {
    text.innerHTML = 'I can read your mind';
    click.setAttribute('style', 'visibility: hidden;');
    subtext.innerHTML = '';
    btn.innerHTML = 'Go';

}

function state2() {
    text.innerHTML = 'Pick a number from 01-99';
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'Next';
    subtext.innerHTML = 'When you have your number, click next';
    addResetIcon();
}

function state3() {
    text.innerHTML = 'Add both digits together to get a new number';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14 is 1 + 4 = 5<br>Click next to proceed';
    addResetIcon();
}

function state4() {
    text.innerHTML = 'Subtract your new number from your old number';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14 - 5 = 9 <br>Click next to proceed';
    addResetIcon();
}

function state5() {
    text.innerHTML = symbols(100);
    finalAns = text.textContent.slice(49, 50);


    click.innerHTML = 'Reveal';
    subtext.innerHTML = 'Scroll to find the result of the previous equation.<br>Note the symbol beside the result.';
    addResetIcon();
}

function state6() {
    text.innerHTML = finalAns;
    click.setAttribute('style', 'visibility: hidden;');
    subtext.innerHTML = `Your symbol is: ${finalAns}`;
    addResetIcon();
}

function clickNext() {
    state++;
    checkPage(state);
}

function clickReset() {
    if (btn.getAttribute('class') === 'go') {
        state = 1;
        btn.setAttribute('class', 'reset');
        checkPage(state);
    } else {
        state = 2;
        btn.setAttribute('class', 'go');
        checkPage(state);
    }
}

function addResetIcon() {
    btn.innerHTML = 'Reset';

}



function checkPage(stateNum) {
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
