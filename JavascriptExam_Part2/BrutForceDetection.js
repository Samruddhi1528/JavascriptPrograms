/*
Login Brute-Force Detection
Write a JavaScript program that simulates a login system with brute-force detection. 
The system should lock the account after 3 consecutive failed attempts. 
Use a do...while loop to process login attempts from an array. 
Demonstrate var (global counter), let (loop variables), and const (credentials and threshold).
 Validate using strict equality (===) and logical operators (&&).



Input:
Valid: admin@testingacademy.com / Test@1234 attempts: [wrong, wrong, wrong, correct]
Output:
Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected


*/

var counter = 0;
var failedCounter = 0;
let attempts = ["wrong", "wrong", "wrong", "correct"]
const threshold = 3
const credentials = "admin@testingacademy.com / Test@1234";

do {
    let attemptNum = counter + 1;

    if (failedCounter >= threshold) {
        // Account is locked — reject everything
        console.log(`Attempt ${attemptNum}:  ACCOUNT LOCKED - Rejected`)
    } else if (attempts[counter] === "correct") {
        console.log(`Attempt ${attemptNum}:  PASSED - Login Successful`)
    } else if (attempts[counter] === "wrong") {
        failedCounter++
        console.log(`Attempt ${attemptNum}:  FAILED - Strike ${failedCounter}/${threshold}`)
    }

    counter++

} while (counter < attempts.length)
