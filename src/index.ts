let id : number = 5
let company: string = "major linkx"
let isPublished: boolean = true
let x: any = "This can be set to any type"
let ids: number[] = [1, 2, 3, 4, 5, 6]
let arr: any[] = [1, true, "test"]

// Tuple -> order matters
let person: [number, string, boolean] = [1, "Rue", true]
// Tuple Array -> order matters
let employee: [number, string][]

employee = [
  [1, "John"],
  [2, "Janice"],
  [3, "Janelle"],
  [4, "Rue"],
]

// Union
let pid: string | number
pid = "22"

//Enum
enum Direction1 {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = { id: number; name: string }
const example: User = { id: 3, name: "Rue" }

const example2: { id: number; name: string } = {
  id: 1,
  name: "John",
}

// Type Assertion -> treat an entity as a different type
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number

//Functions

function addNum(x: number, y: number): number {
  return x + y
}

const result: number = addNum(1, 2)

// void
function log(message: string | number ):void {
  console.log(message)
}

// const output = log('Hello World')


//Interfaces
interface UserInterface { readonly id: number; name: string, age?: number }
const testUser: UserInterface = { id: 3, name: "Rue" }

// Interface with Functions
interface MathFunction {
  (x: number, y: number) : number
}
const add: MathFunction = (x: number, y: number): number => x+y
const sub: MathFunction = (x: number, y: number): number => x-y

// Type vs Interface
  // Types can be used with Primitives and Unions
  // Interfaces cannot be used with Primitives and Unions

  type Point = number | string
  const p1: Point = 1
  const p2: Point = "Test"

  // Classes

  class Person{
    private id: number
    name: string

    constructor(id: number, name:string){
      this.id = id
      this.name = name
    }
    register(){
      return `${this.name} is now registered`
    }
  }
  const rue = new Person(10, "Rue")
  const jon = new Person(12, "Jon")

  console.log( rue.register())

  // Data Modifiers
  // Public, Private , Protected 
    // Private -> only accessible within the class
    // Protected ->  only accessible within the class or classes that extend it