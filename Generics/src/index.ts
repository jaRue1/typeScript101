// Generics 

  function getArray<T>(items: T[]):T[] {
    return new Array().concat(items)
  }

  let numArray = getArray<number>([1,2,3,4,5,6,7])
  let strArray = getArray<string>(['jon','jill','jack','james','jess','jake','jay'])