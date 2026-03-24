//Without function, code is redundunt for each input
let score1 = 85
let result1 = score1 >= 70 ? true : false
console.log(result1)

let score2 = 35
let result2 = score2 >= 70 ? true : false
console.log(result2)

//Thus create a function
function getResult(score) {
    return score >= 70 ? true : false
}

console.log(getResult(85))
console.log(getResult(35))