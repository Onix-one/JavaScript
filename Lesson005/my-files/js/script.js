"use strict";

// const timerId = setTimeout(() => {
//     console.log('Hello');
// }, 2000);
// console.log(timerId);

// const writer = (item) => {
//     console.log(item);
// };

// const timerIdTwo = setTimeout(writer, 4000, "world");
// console.log(timerIdTwo);

const btn = document.querySelector('#start-animation');
console.log(btn);

const animationForBowOne = () => {

    const elem = document.querySelector('.box-one');
    let top = 0;
    let left = 0;
    console.log(elem);

    const id = setInterval(frame, 1);

    function frame() {

        if (top != 300 && left == 0) {
            top++;
            elem.style.top = top + 'px';
        }
        if (top == 300 && left != 300) {
            left++;
            elem.style.left = left + 'px';
        }
        if (left == 300 && top != 0) {
            top--;
            elem.style.top = top + 'px';
        }
        if (top == 0 && left != 0) {
            left--;
            elem.style.left = left + 'px';
        }
    }
};

const animationForBowTwo = () => {
    const elem = document.querySelector('.box-two');
    let top = 300;
    let left = 0;
    let up;
    console.log(elem);

    const id = setInterval(frame, 1);

    function frame() {

        if (top == 300 && left == 0) {
            up = true;
        }
        if (top == 0 && left == 300) {
            up = false;
        }

        if (up) {
            top--;
            left++;
            elem.style.top = top + 'px';
            elem.style.left = left + 'px';
        }
        if (!up) {
            top++;
            left--;
            elem.style.top = top + 'px';
            elem.style.left = left + 'px';
        }
    }
};

const animationForBowThree = () => {
    const elem = document.querySelector('.box-three');
    let top = 0;
    let left = 0;
    console.log(elem);

    const id = setInterval(frame, 1);

    function frame() {

        if (top == 0 && left != 300) {
            left++;
            elem.style.left = left + 'px';
        }
        if (top != 300 && left == 300) {
            top++;
            elem.style.top = top + 'px';
        }
        if (left != 0 && top == 300) {
            left--;
            elem.style.left = left + 'px';
        }
        if (top != 0 && left == 0) {
            top--;
            elem.style.top = top + 'px';
        }
    }

    
};

btn.addEventListener('click', () => {
    animationForBowOne();
    animationForBowTwo();
    animationForBowThree();
});



