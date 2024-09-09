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

//--------------------------------------------
// functions
//--------------------------------------------

function addTwoNumbers(a: number, b: number): number {
    return a + b
}

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b
}

console.log(addTwoNumbers(3,9))

function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}


//--------------------------------------------
// return type inference
//--------------------------------------------

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`
}

const result = formatGreeting('Mario', 'Hello')

console.log(result)

//--------------------------------------------
// any type
//--------------------------------------------

let myAge: any
myAge = 30
myAge = false

//--------------------------------------------
// any type with arrays
//--------------------------------------------

let thingsArray: any[] = ['hello', true, 30, null]

thingsArray.push({id: 123})

function addTogether(value: any) {
    return value + value
}

const resultOne = addTogether(3)
const resultTwo = addTogether('hello')

//--------------------------------------------
// tuples - types are in a specific order
//--------------------------------------------

let thePerson: [string, number, boolean] = ['mario', 30, true]

//--------------------------------------------
// tuples examples
//--------------------------------------------

let hlsa: [number, string, string, number]
hlsa = [200, '100%', '50%', 1]

let xy: [number, number]

xy = [94.7, 20.1]

function useCoords(): [number, number] {
    // get coords
    const lat = 100
    const long = 50
    return [lat, long]
}

const [lat, long] = useCoords()

//--------------------------------------------
// named tuples
//--------------------------------------------

let userOne: [name: string, age: number]

userOne = ['peach', 30]

console.log(userOne[0])

//--------------------------------------------
// interfaces
//--------------------------------------------

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: 'Mario',
    avatar: 'mario.png'
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author
}

const newPost: Post = {
    title: 'My First Post',
    body: 'This is my first post',
    tags: ['first', 'post'],
    createdAt: new Date(),
    author: authorOne
}

//--------------------------------------------
// as function argument types
//--------------------------------------------

function createPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author.name}`)
}

createPost({ title: 'a new post title', body: 'a new post body', tags: ['new', 'post'], createdAt: new Date(), author: authorOne })

//--------------------------------------------
// with arrays
//--------------------------------------------

let posts: Post[] = []

posts.push(newPost)

//--------------------------------------------
// type alias
//--------------------------------------------

// example 1 - tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return[r, g, b]
}

const colorOne: Rgb = getRandomColor()
const colorTwo: Rgb = getRandomColor()

console.log(colorOne, colorTwo)

type User = {
    name: string,
    score: number
}

const firstUser: User = {
    name: 'Mario',
    score: 75
}

function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(firstUser)

//--------------------------------------------
// union types
//--------------------------------------------

let someId: string | number

someId = 1
someId = '2'

let email: string | null = null

//type Id = number | string

let anotherId: Id

//--------------------------------------------
// union type pitfall
//--------------------------------------------

// function swapIdType(id: Id): Id {
//
//     parseInt(id)
//
//     return id
// }
//
// swapIdType('5')

//--------------------------------------------
// type guards
//--------------------------------------------

type Id = number | string

function swapIdType(id: Id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id)
    } else if (typeof id === 'number') {
        // can use number methods
        return id.toString()
    }
}

const idOne = swapIdType(5)
const idTwo = swapIdType('5')

console.log(idOne, idTwo)
console.log(idOne, idTwo)

//--------------------------------------------
// tagged interfaces
//--------------------------------------------

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.email, value.username)
    } else if (value.type === 'person') {
        console.log(value.firstName, value.age)

    }
}