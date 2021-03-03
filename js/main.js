
let text = document.querySelector(".text");
let click = document.querySelector('.click');
let subtext = document.querySelector('.subtext');
let btn = document.querySelector('.home');

let state = 1;

function state1() {
    text.innerHTML = 'I can read your mind';
    click.innerHTML = 'Next';
    subtext.innerHTML = '';
    btn.innerHTML = '';

}

function state2() {
    text.innerHTML = 'Pick a number from 01-99';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'When you have your number, click next';
    btn.innerHTML = '';
    addHomeIcon();

}

function state3() {
    text.innerHTML = 'Add both digits together to get a new number';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14 is 1 + 4 = 5<br>Click next to proceed';
    btn.innerHTML = '';
    addHomeIcon();
}

function state4() {
    text.innerHTML = 'Subtract your new number from your old number';
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14 - 5 = 9 <br> Click next to proceed';
    btn.innerHTML = '';
    addHomeIcon();
}

function state5() {
    text.innerHTML = symbols(10);
    finalAns = text.textContent.slice(9); // Gets the final symbol answer
    click.innerHTML = 'Reveal';
    subtext.innerHTML = 'Find your new number <br> Note the symbol beside the number';
    btn.innerHTML = '';
    addHomeIcon();
}

function state6() {
    text.innerHTML = '';
    click.innerHTML = '';
    subtext.innerHTML = `Your symbol is: <br> ${finalAns}`;
    btn.innerHTML = '';
    addHomeIcon();
}

let finalAns; // The final string output

function clickNext() {
    state++;
    checkState(state);
}

function clickHome() {
    if (btn.getAttribute('class') == 'go') {
        state = 1;
        btn.setAttribute('class', 'home');
        checkState(state);
    } else {
        state = 1;
        btn.setAttribute('class', 'go');
        checkState(state);
    }
}

function addHomeIcon() {
    btn.innerHTML = ' <img src="img/undo-solid.svg" alt="home">';

}

function symbols(x) {
    let output = '';
    let sym = [];
    let symChar = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+'];
    for (i = 0; i < 9; i++) {
        let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length)))); // rand num 0 - length of array
        sym.push(symChar[rand]) // push into array
        symChar.splice(rand, 0); // delete that symbol from array
    }
    for (i = 0; i < x; i++) {
        let num = i;
        output += `${num} - ${sym[(i) % 9]}<br>`; // subtract 1 because arrays count from 0
    }
    return output;
}

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
btn.addEventListener('click', clickHome);