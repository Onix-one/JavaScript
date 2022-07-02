"use strict";

//Task01

function firstTask() {

    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}
firstTask();

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}
secondTask();

function thirdTask() {

    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
thirdTask();

function fourthTask() {

    let i = 2;
    const length = 16;

    while (i <= length) {
        if (i % 2 == 0) {
            i++;
            continue;

        } else {
            console.log(i);
            i++;
        }
    }
}
fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];
    let counter = 5;
    for (let i = 0; i < 6; i++) {

        arrayOfNumbers[i] = counter;
        counter++;
    }
    return arrayOfNumbers;
}
console.log(fifthTask());


//Task02

function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}
console.log(firstTask());

function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        }
        if (typeof(data[i]) === 'string') {
            data[i] = data[i] + ' - done';
        }
    }
    return data;
}
console.log(secondTask());

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let counter = data.length -1;
    for (let i = 0; i < data.length; i++) {
        result[i] = data[counter];
        counter--;
    }
    return result;
}
console.log(thirdTask());

//Task03

const lines = 5;
let result = '';
let counter = 1;
for (let i = 0; i <= lines; i++) {

    let counterTwo = lines - i;
    for (let j = 0; j < counterTwo; j++) {
        result += ' ';
    }

    for (let k = 0; k < counter; k++) {
        result += '*';
    }
    result += '\n';
    counter = counter + 2;
}
console.log(result);


//Task04

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = '';
let isCorrect = false;

while (!isCorrect) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    if (numberOfFilms === '' || numberOfFilms === null || numberOfFilms.length > 50) {
        alert("Произошла ошибка");
        continue;
    }

    numberOfFilms = Number(numberOfFilms);

    if (numberOfFilms >= 0 && numberOfFilms < 10) {
        isCorrect = true;
        alert("Просмотрено довольно мало фильмов");
    }
    else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        isCorrect = true;
        alert("Вы классический зритель");
    }
    else if (numberOfFilms >= 30) {
        isCorrect = true;
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }

}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    if (lastFilm === '' || lastFilm === null || lastFilm.length > 50) {
        alert("Произошла ошибка");
        i--;
        continue;
    }

    let filmRate = prompt('На сколько оцените его?', '');
    if (filmRate === '' || filmRate === null || filmRate.length > 50) {
        alert("Произошла ошибка");
        i--;
        continue;
    }
    personalMovieDB.movies[lastFilm] = filmRate;
}

console.log(personalMovieDB);


//Замыкание 
function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);



//Task 05

function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Anton'));

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}
console.log(returnNeighboringNumbers(5));

function getMathResult(number, counter) {
    if(typeof(counter) !== 'number' || counter <= 0){
        console.log(typeof(counter));
        return number;
    }
    let phrase = '';
    let tempNumber = number;
    for (let i = 1; i <= counter; i++) {
        phrase += tempNumber;
        tempNumber = tempNumber + number;
        if (i !== counter) {
            phrase += '---';
        }
    }
    return phrase;
}
console.log(getMathResult(3,0));


//Task 06

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    let isCorrect = false;
    while (!isCorrect) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        if (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
            continue;
        }
        else {
            numberOfFilms = Number(numberOfFilms);
            isCorrect = true;
        }
    }
}
start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
        if (lastFilm === '' || lastFilm === null || lastFilm.length > 50) {
            alert("Произошла ошибка");
            i--;
            continue;
        }

        let filmRate = prompt('На сколько оцените его?', '').trim();
        if (filmRate === '' || filmRate === null || filmRate.length > 50) {
            alert("Произошла ошибка");
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = filmRate;
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms >= 0 && numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (numberOfFilms >= 10 && numberOfFilms < 30) {

        alert("Вы классический зритель");
    }
    else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {

    for (let i = 0; i < 3; i++) {
        let ganre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
        if (ganre === '' || ganre === null || ganre.length > 50) {
            alert("Произошла ошибка");
            i--;
            continue;
        }
        personalMovieDB.genres[i] = ganre;
    }
}
writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();



//Task 07

function calculateVolumeAndArea(edgeLength) {
    if (typeof (edgeLength) !== 'number' || edgeLength === null || !Number.isInteger(edgeLength) || edgeLength === undefined || edgeLength <= 0) {

        return `При вычислении произошла ошибка`;

    } else {

        const capacity = edgeLength * edgeLength * edgeLength;
        const totalArea = 6 * (edgeLength * edgeLength);

        return `Объем куба: ${capacity}, площадь всей поверхности: ${totalArea}`;
    }

}
console.log(calculateVolumeAndArea(12));

function getCoupeNumber(placeNumber) {
    if (typeof (placeNumber) !== 'number' || !Number.isInteger(placeNumber) || placeNumber < 0) {

        return `Ошибка. Проверьте правильность введенного номера места`;

    }
    else if (placeNumber === 0 || placeNumber > 36) {
        return `Таких мест в вагоне не существует`;
    }
    else {
        let result = 1;

        for (let i = 1; i < 37; i++) {
            if (placeNumber === i) {
                return result;
            }
            if (i % 4 === 0) {
                result++;
            }
        }
    }
}
console.log(getCoupeNumber(9));


//Task 08

function getTimeFromMinutes(value) {
    if (typeof (value) !== 'number' || !Number.isInteger(value) || value < 0 || value === ''
        || value === null || value === undefined) {
        return 'Ошибка, проверьте данные';
    }
    let hours = 0;
    let minutes = 0;
    let val = value / 60;
    hours = Number.parseInt(val);
    minutes = Number.parseInt(60 * (val - hours));
    if (hours === 0 || hours >= 5 && hours <= 10) {
        return (`Это ${hours} часов и ${minutes} минут`);
    }
    else if (hours === 1) {
        return (`Это ${hours} час и ${minutes} минут`);
    }
    else if (hours >= 2 && hours <= 4) {
        return (`Это ${hours} часа и ${minutes} минут`);
    }
}
console.log(getTimeFromMinutes(50));

function findMaxNumber(x1, x2, x3, x4) {
    const array = [x1, x2, x3, x4];
    for (let i = 0; i < array.length; i++) {

        if (typeof (array[i]) !== 'number' || array[i] === ''
            || array[i] === null || array[i] === undefined) {
            return 0;
        }
    }
    let result = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

//Task 09
// Example 0112358

function fib(count) {
    let valueOne = 0;
    let valueTwo = 1;
    let currentValue = 0;
    let result = '';
    if (typeof (count) !== 'number' || !Number.isInteger(count) || count <= 0 || count === ''
    || count === null || count === undefined) {
        return '';
    }
    if (count === 1) {
        return '0';
    }
    for (let i = 1; i < count; i++) {
        if (i == 1) {
            result += valueOne;
            result += ' ';
            result += valueTwo;
            currentValue = valueOne + valueTwo;
        }
        else {
            result += ' ';
            result += currentValue;
            currentValue = valueOne + valueTwo;
        }
        valueOne = valueTwo;
        valueTwo = currentValue;
    }
    return result;
}
console.log(fib(1));