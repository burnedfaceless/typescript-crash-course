"use strict";
let age = 30;
let firstName = 'Mario';
let isFictional;
age = 31;
firstName = 'Luigi';
isFictional = true;
let planet = 'Earth';
let moons = 1;
let isLarge = false;
// null & undefined - value can only be null or undefined
let something;
let anotherThing;
//--------------------------------------------
// arrays
//--------------------------------------------
let names = ['Mario', 'Luigi', 'Peach'];
let ages = [30, 31, 29];
names.push('Bowser');
ages.push(32);
//--------------------------------------------
// type inference with arrays
//--------------------------------------------
let fruits = ['apples', 'pears', 'bananas'];
// fruits.push(3) // error
fruits.push('oranges');
const f = fruits[3]; // string
let things = [1, true, 'hello'];
const t = things[0];
//--------------------------------------------
// object literals
//--------------------------------------------
let user = {
    firstName: 'Mario', age: 30, id: 1
};
//--------------------------------------------
// type inference with object literals
//--------------------------------------------
let person = {
    name: 'Luigi',
    score: 35
};
console.log(person.name);
//--------------------------------------------
// functions
//--------------------------------------------
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
console.log(addTwoNumbers(3, 9));
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
//--------------------------------------------
// return type inference
//--------------------------------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('Mario', 'Hello');
console.log(result);
//--------------------------------------------
// any type
//--------------------------------------------
let myAge;
myAge = 30;
myAge = false;
//--------------------------------------------
// any type with arrays
//--------------------------------------------
let thingsArray = ['hello', true, 30, null];
thingsArray.push({ id: 123 });
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether(3);
const resultTwo = addTogether('hello');
//--------------------------------------------
// tuples - types are in a specific order
//--------------------------------------------
let thePerson = ['mario', 30, true];
//--------------------------------------------
// tuples examples
//--------------------------------------------
let hlsa;
hlsa = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//--------------------------------------------
// named tuples
//--------------------------------------------
let userOne;
userOne = ['peach', 30];
console.log(userOne[0]);
const authorOne = {
    name: 'Mario',
    avatar: 'mario.png'
};
const newPost = {
    title: 'My First Post',
    body: 'This is my first post',
    tags: ['first', 'post'],
    createdAt: new Date(),
    author: authorOne
};
//--------------------------------------------
// as function argument types
//--------------------------------------------
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost({ title: 'a new post title', body: 'a new post body', tags: ['new', 'post'], createdAt: new Date(), author: authorOne });
//--------------------------------------------
// with arrays
//--------------------------------------------
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const firstUser = {
    name: 'Mario',
    score: 75
};
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(firstUser);
//--------------------------------------------
// union types
//--------------------------------------------
let someId;
someId = 1;
someId = '2';
let email = null;
//type Id = number | string
let anotherId;
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    }
    else if (typeof id === 'number') {
        // can use number methods
        return id.toString();
    }
}
const idOne = swapIdType(5);
const idTwo = swapIdType('5');
console.log(idOne, idTwo);
console.log(idOne, idTwo);
//--------------------------------------------
// tagged interfaces
//--------------------------------------------
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    else if (value.type === 'person') {
        console.log(value.firstName, value.age);
    }
}
