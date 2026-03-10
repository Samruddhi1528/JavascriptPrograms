//Array.isArray
let res = Array.isArray([1, 2, 3])

console.log(res)

let res1 = Array.isArray("A")
console.log(res1)


//every, some, find
let r = [80, 90, 100].every(s => s > 70)    //check every element in arrays
console.log(r)


let r1 = [80, 90, 100].some(s => s > 70)
console.log(r1)


let r2 = [80, 90, 100].find(s => s > 70)
console.log(r2)
