/*Retry Failed API Call
In automation testing, API calls sometimes fail due to network issues.
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. 
Simulate random success/failure using Math.random() 
(40% chance of success: randomValue > 0.6). 
Log each attempt and print the final result.

Input:
MAX_ATTEMPTS = 5
Output:
Attempt 1: ❌ FAILED (Timeout/Error) 
Attempt 2: ✅ SUCCESS (Response 200 OK) 
API call PASSED after 2 attempt(s).

 */


let attempts = 1;
let max_attempts = 5;
let success;

function fakeAPICall() {
    const random = Math.random()
    return random > 0.6
}

do {
    success = fakeAPICall()
    if (success) {
        console.log(`Attempt ${attempts}: SUCCESS (Response 200 OK) `)
    }
    else {
        console.log(`Attempt ${attempts}: FAILED (Timeout/Error) `)
    }
    attempts++
} while (attempts <= max_attempts)

if(!success){
    console.log("All retries failed")
}