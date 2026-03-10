/*
Mini Test Suite Runner
Build a mini test suite runner that 
executes test cases 
and 
generates a summary report. 
This question combines ALL topics:
 var/let/const, if-else, switch, for loop, while loop, do...while, 
 operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has
a name, 
expected value, 
actual value, and 
comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan).

Run all tests, 
track pass/fail/error counts, 
find consecutive passes from start (while loop), 
find first failure (do...while), 
and print a comprehensive report.


Input:
{ name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
Output:
✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED


*/


let testcase = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Status code is 200", actual: 200, expected: 200, type: "looseEqual" },
    { name: "Status code is 200", actual: 200, expected: 200, type: "typeCheck" },
    { name: "Status code is 200", actual: 200, expected: 200, type: "truthy" },
    { name: "Status code is 200", actual: 200, expected: 200, type: "lessThan" },
    { name: "Status code is 400", actual: 400, expected: 200, type: "strictEqual" }
]

var passCount = 0;
var failCount = 0;
var errorCount = 0;

//finding total test cases
const totalTestCases = testcase.length

//for loop to iterate through each testcase in testcase array

for (let i = 0; i <= testcase.length; i++) {

    //traverse each testcase
    let tc = testcase[i]
    let result;
    let message = "";

    switch (tc.type) {
        case "strictEqual":
            result = tc.actual === tc.expected
            message = `${tc.actual} === ${tc.expected}`
            break;
        case "looseEqual":
            result = tc.actual == tc.expected
            message = `${tc.actual} == ${tc.expected}`
            break;
        case "typeCheck":
            result = typeof tc.actual === typeof tc.expected
            message = `typeof ${tc.actual} === typeof ${tc.expected}`
            break;
        case "truthy":
            result = !!tc.actual
            message = `${tc.actual} is truthy`
            break;
        case "lessThan":
            result = tc.actual < tc.expected
            message = `${tc.actual} < ${tc.expected}`
            break;
        default:
            result = false
            message = "Invalid test type"
            errorCount++
            break;
    }



    if (result) {
        passCount++
        console.log(`TC-${i + 1}: ${tc.name} → PASS (${message})`)
    } else {
        failCount++
        console.log(`TC-${i + 1}: ${tc.name} → FAIL (${message})`)
    }

    const executed = passCount + failCount
    const passRate = ((passCount / (executed || 1)) * 100).toFixed(2);

    //while loop to check consecutive pass from start

    let consecutivePass = 0;

    while (consecutivePass < testcase.length && passCount > consecutivePass) {
        consecutivePass++;
    }


    //do while loop to find first failure
    let index = 0;
    let firstFailure = -1;
    do {
        if (index >= testcase.length) break;

        let tc = testcase[index];

        let check =
            (tc.type === "strictEqual" && tc.actual === tc.expected) ||
            (tc.type === "looseEqual" && tc.actual == tc.expected) ||
            (tc.type === "typeCheck" && typeof tc.actual === tc.expected) ||
            (tc.type === "truthy" && !!tc.actual) ||
            (tc.type === "lessThan" && tc.actual < tc.expected);

        if (!check) {
            firstFailure = index + 1;
            break;
        }

        index++;

    } while (index < testcase.length);

    const overall = failCount === 0 && errorCount === 0 ? "PASSED" : "FAILED";

    console.log("\n------ TEST SUMMARY ------");
    console.log(`Total Tests: ${totalTestCases}`);
    console.log(`Passed: ${passCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Pass Rate: ${passRate}%`);
    console.log(`Consecutive Passes From Start: ${consecutivePass}`);
    console.log(`First Failure Test: ${firstFailure === -1 ? "None" : "TC-" + firstFailure}`);
    console.log(`Overall: ${overall === "PASSED" ? "PASSED" : "FAILED"}`);


}