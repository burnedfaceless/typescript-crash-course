let age: number = 30
let firstName: string = 'Mario'
let isFictional: boolean

age = 31
firstName = 'Luigi'
isFictional = true

let planet = 'Earth'
let moons = 1
let isLarge = false

// null & undefined - value can only be null or undefined
let something: null
let anotherThing: undefined

//--------------------------------------------
// arrays
//--------------------------------------------

let names: string[] = ['Mario', 'Luigi', 'Peach']
let ages: number[] = [30, 31, 29]

names.push('Bowser')
ages.push(32)

//--------------------------------------------
// type inference with arrays
//--------------------------------------------

let fruits = ['apples', 'pears', 'bananas']
// fruits.push(3) // error
fruits.push('oranges')

const f = fruits[3] // string

let things = [1, true, 'hello']

const t = things[0]

//--------------------------------------------
// object literals
//--------------------------------------------

let user: {firstName: string, age: number, id: number } = {
    firstName: 'Mario', age: 30, id: 1
}

//--------------------------------------------
// type inference with object literals
//--------------------------------------------

let person = {
    name: 'Luigi',
    score: 35
}

console.log(person.name)