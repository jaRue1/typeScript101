//Functions

function addNum(x: number, y: number): number {
  return x + y
}

const result: number = addNum(1, 2)

// void
function log(message: string | number ):void {
  console.log(message)
}

const output = log('Hello World')