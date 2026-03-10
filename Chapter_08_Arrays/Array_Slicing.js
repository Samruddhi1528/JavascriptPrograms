//Slicing 
//slice(start, end)
//start is inclusive
//end is exclusive


let arr = [1, 2, 3, 4, 5]

console.log(arr.slice(1, 3)) //index starts from 1 and ends at n-1 i.e. 2
console.log(arr.slice(2, 4)) //index starts from 2 and ends at n-1 i.e. 3

console.log(arr.slice(2)) //index starts from 2 and goes till the end

console.log(arr.slice(-1)) //index starts from the end and goes till the end

console.log(arr.slice(-3)) //index starts from the end and goes till the end

console.log(arr.slice(0)) // It will print all the numbers


console.log(arr.slice(-6)) // It will print all the numbers, no exception

//Concatenation

let a = [1, 2]
let b = [3, 4]
let c = a.concat(b, [5, 6])
console.log(c)


//spread[modern way of concatenation using ...] 
let d = [...a, ...b]  //... is used to spread the elements of the array
console.log(d)


//..., ===
s = ["pass", "fail", "skip"].join(" ")
console.log(s)

