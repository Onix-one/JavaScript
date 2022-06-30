import {getUser, array} from './app.mjs';  

const user = getUser();

console.log(user);

for(const elem of array){
    console.log(elem);
}