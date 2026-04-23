function getFirstResult(name: string): string {
    return name.toLowerCase()
}

console.log(getFirstResult("Samruddhi"))
// console.log(getFirstResult(25)) this is not possible as function takes string but 25 is number.

// now to solve this problem we will use generics
//Here T is just a name given to a placeholder which is going to get replace by some type when we call the function
function getFirstResult1<T>(results: T[]): T {
    return results[1]!  //! it should be not null assertion operator
}

let firstCode = getFirstResult1<string>(["Samruddhi", "Abhijit", "Komal"])
console.log(firstCode)

let secondCode = getFirstResult1<number>([1, 2, 3, 4, 5])
console.log(secondCode)
