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

  

  
  