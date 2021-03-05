


let text = document.querySelector('.text');
let click = document.querySelector('.click');
let subtext = document.querySelector('.subtext');
let btn = document.querySelector('.go');

let page = 1;
let finalAns;

function symbols(x) {
    let output = '';
    let sym = [];
    let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
    for (i = 0; i < 9; i++) {
        let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length)))); // rand num 0 - length of array
        sym.push(symChar[rand]) // push into array
        symChar.splice(rand, 1); // delete that symbol from array
    }
    for (i = 0; i < x; i++) {
        let num = i;
        output += `${num} - ${sym[(i) % 9]}<br>`; // subtract 1 because arrays count from 0
    }
    return output;
}

function page1() {
    text.innerHTML = 'I can read your mind';
    click.setAttribute('style', 'visibility: hidden;');
    subtext.innerHTML = '';
    btn.innerHTML = 'Go';

}

function page2() {
    text.innerHTML = 'Pick a number from 01-99';
    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'Next';
    subtext.innerHTML = 'When you have your number, click next';
    addResetIcon();
}

function page3() {
    text.innerHTML = 'Add both digits together to get a new number';

    click.setAttribute('style', 'visibility: visible;');
    click.innerHTML = 'Next';
    subtext.innerHTML = 'Ex: 14 is 1 + 4 = 5<br>Click next to proceed';
    addResetIcon();
}

function page4() {
    text.innerHTML = 'Subtract your new number from your old number';


    click.innerHTML = 'NEXT';
    subtext.innerHTML = 'Ex: 14 - 5 = 9 <br>Click next to proceed';
    addResetIcon();
}

function page5() {
    text.innerHTML = symbols(100);
    finalAns = text.textContent.slice(49, 50);


    click.innerHTML = 'Reveal';
    subtext.innerHTML = 'Scroll to find the result of the previous equation.<br>Note the symbol beside the result.';
    addResetIcon();
}

function page6() {
    text.innerHTML = finalAns;
    click.setAttribute('style', 'visibility: hidden;');
    subtext.innerHTML = `Your symbol is: ${finalAns}`;
    addResetIcon();
}

function clickNext() {
    page++;
    checkPage(page);
}

function clickReset() {
    if (btn.getAttribute('class') === 'go') {
        page = 2;
        btn.setAttribute('class', 'reset');
        checkPage(page);
    } else {
        page = 1;
        btn.setAttribute('class', 'go');
        checkPage(page);
    }
}

function addResetIcon() {
    btn.innerHTML = 'Reset';

}



function checkPage(pageNum) {
    if (pageNum == 1) {
        page1();
    }
    else if (pageNum == 2) {
        page2();
    }
    else if (pageNum == 3) {
        page3();
    }
    else if (pageNum == 4) {
        page4();
    }
    else if (pageNum == 5) {
        page5();
    }
    else {
        page6();
    }
}

click.addEventListener('click', clickNext);
btn.addEventListener('click', clickReset);
