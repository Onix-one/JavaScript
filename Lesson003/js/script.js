"use strict";

//Task10
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan){
        let languages = '';
        plan.skills.languages.forEach((item)=>{ languages +=`${item.toUpperCase()} `;});

        return `Мне ${plan.age} и я владею языками: ${languages}`;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    var result = '';
    for(let item in programmingLangs){
        result += `Язык ${item} изучен на ${programmingLangs[item]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));

//Task 11

const family = ['Peter', 'Ann', 'Alex', 'Linda'].l;

function showFamily(arr) {
    let people = '';
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    arr.forEach((item) => { people += `${item} `; });
    return `Семья состоит из: ${people}`;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((item) => { console.log(item.toLowerCase()); });
}

standardizeStrings(favoriteCities);

//Task 12

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Ошибка!';
    }
    return str.split('').reverse().join("");
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let result = 'Доступные валюты:\n';

    for (let item of arr) {
        if (item === missingCurr) {
            continue;
        }
        result += `${item}\n`;
    }
    return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'UAH'));


/* Practice:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        let isCorrect = false;
        while (!isCorrect) {
            this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
            if (this.count === '' || this.count === null || this.count === undefined || isNaN(this.count)) {
                continue;
            }
            else {
                this.count = Number(this.count.trim());
                isCorrect = true;
            }
        }
    },
    rememberMyFilms: function () {
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
            this.movies[lastFilm] = filmRate;
        }
    },
    detectPersonalLevel: function () {
        if (this.count >= 0 && this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        }
        else if (this.count >= 10 && this.count < 30) {

            alert("Вы классический зритель");
        }
        else if (this.count >= 30) {
            alert("Вы киноман");
        }
        else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function () {

        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (genre === '' || genre === null || genre === undefined || genre.length > 50) {
                alert("Произошла ошибка");
                i--;
                continue;
            }
            this.genres[i] = genre.trim();
        }

        this.genres.forEach((genre, index) => { console.log(`Любимый жанр #${index + 1} - это ${genre}`); });
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

//Task 13

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let cost = 0;
    const { shops, height, moneyPer1m3, budget } = data;
    shops.forEach((item) => {
        const volume = item.width * item.length * height;
        const pricePerRoom = volume * moneyPer1m3;
        cost += pricePerRoom;
    });
    if (cost > budget) {
        return 'Бюджета недостаточно';
    }
    else {
        return 'Бюджета достаточно';
    }
}

//Task 14

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam2'];

function sortStudentsByGroups(arr) {
    let newArray = [];
    arr = arr.sort();
    const remainder = arr.length % 3;

    if (remainder === 0) {
        let counter = 0;
        let team = [];
        for (let i = 0; i < arr.length; i++) {
            team[counter] = arr[i];
            counter++;
            if (counter === 3) {
                newArray.push(team);
                counter = 0;
                team = [];
            }
        }
        newArray.push('Оставшиеся студенты: -');
    }
    else if (remainder === 1) {
        let counter = 0;
        let team = [];
        for (let i = 0; i < arr.length - 1; i++) {
            team[counter] = arr[i];
            counter++;
            if (counter === 3) {
                newArray.push(team);
                counter = 0;
                team = [];
            }
        }
        const freePlayer = arr[arr.length - 1];
        newArray.push(`Оставшиеся студенты: ${freePlayer}`);
    }
    else if (remainder === 2) {
        let counter = 0;
        let team = [];
        for (let i = 0; i < arr.length - 1; i++) {
            team[counter] = arr[i];
            counter++;
            if (counter === 3) {
                newArray.push(team);
                counter = 0;
                team = [];
            }
        }
        const freePlayerOne = arr[arr.length - 1];
        const freePlayerTwo = arr[arr.length - 2];
        newArray.push(`Оставшиеся студенты: ${freePlayerTwo}, ${freePlayerOne}`);
    }
    return newArray;
}

console.log(sortStudentsByGroups(students));

//Task 15

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((fDish.price + sDish.price) > average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors =  [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);


