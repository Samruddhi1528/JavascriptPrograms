/*After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, 
and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release). 

Input:
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
Output:
Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.


*/

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let pass = 0;
let fail = 0;
let skip = 0;
let verdict = '';
let passRate;
let executed;


for (let i = 0; i <= testResults.length; i++) {
    if (testResults[i] == 'pass') {
        pass++;
    }
    else if (testResults[i] == 'fail') {
        fail++;
    }
    else if (testResults[i] == 'skip') {
        skip++;
    }
}

if (fail == 0 && skip == 0) {
    verdict = "all passed → ready for release"
} else if (fail <= 2) {
    verdict = "failures → review"
} else if (fail >= 2) {
    verdict = "failures → block release"
}

executed = pass + fail
passRate = ((pass / executed) * 100).toFixed(2)
console.log(`Total Tests : ${testResults.length} Passed: ${pass} Failed: ${fail} Skipped: ${skip} Pass Rate: ${passRate}% VERDICT: ${verdict}`)

