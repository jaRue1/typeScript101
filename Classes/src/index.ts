// Classes
interface PersonInterface { id: number; name: string, register(): string }

class Person implements PersonInterface {
   id: number
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

//Subclass
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position:string){
    super(id,name)
    this.position = position
  }
}
 const emp = new Employee(3,"Chase","Developer")

 console.log(emp.register())