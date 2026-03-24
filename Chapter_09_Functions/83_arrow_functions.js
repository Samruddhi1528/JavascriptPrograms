//Function expression
const greet = function (name) {
    return `Hello ${name}`
}

console.log(greet("John"))

/*Arrow functions only works when you have single lines
Remove function keyword
Remove return keyword
Remove {} if single line
*/

const counter = n => n * 2
console.log(counter(2))
//here, 0


const greet1 = (name) => `Hello ${name}`
console.log(greet1("John"))



const doubltIt = (num) => num * 2
console.log(doubltIt(2))

//No params
const greet2 = () => `Hello`
console.log(greet2())


//Multiline

const getResult = (score) => {
    if (score >= 35) {
        return "Pass"
    } else {
        return "Fail"
    }
}
console.log(getResult(35))




