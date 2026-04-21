//Interface is a blueprint for an object. Anythuing more or less is not allowed

interface Testcase {
    id: number,
    testcase: string,
    status: string,
    duration: number,
}

let testcase1: Testcase = {
    id: 1,
    testcase: "Login",
    status: "Pass",
    duration: 1000,
}

console.log(testcase1)

let testcase2: Testcase = {
    id: 2,
    testcase: "Logout",
    status: "Fail",
    duration: 2000,
}

console.log(testcase2)

//Below will throw error as duration is not defined
// let testcase3: Testcase = {
//     id: 3,
//     testcase: "Search",
//     status: "Pass",
    
// }

// console.log(testcase3)