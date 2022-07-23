"use strict";


const wrapper = document.getElementById('wrapper');
console.log(wrapper);

const button = document.getElementById('submit');
console.log(button);
button.style.margin = '2px';

const styleClassRed = 'red';
const styleClassViolet = 'violet';

wrapper.innerHTML = `<h1 class='${styleClassRed}'>Hello</h1>`;
wrapper.insertAdjacentHTML('afterbegin', `<h1 class='${styleClassViolet}'>Hello</h1>`);

button.addEventListener('focus', (event) => {
    button.style.backgroundColor = 'red';
});
button.addEventListener('blur', (event) => {
    button.style.backgroundColor = 'blue';
});

wrapper.addEventListener('select', (event) => {
    button.style.backgroundColor = 'blue';
});

const pow = (x, n) => {
    if (n === 1) {
        return x;
    }
    else {
        return x * pow(x, n - 1);
    }
};

console.log(pow(2, 10));


const factorial = (n) => {
    if(!Number.isInteger(n)){
        return "ssss";
    }
      if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(factorial(5));