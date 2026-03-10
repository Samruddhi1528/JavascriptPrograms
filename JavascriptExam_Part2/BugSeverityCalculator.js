/*Bug Severity Classifier
As a QA engineer, classify bugs based on two factors: 
frequency ("always", "often", "rarely")
 and 
impact ("blocker", "major", "minor"). 
Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4


Input:
frequency = "always", impact = "blocker"
Output:
Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately



*/

let priority;
let priorityMsg;


function calculateBugSeverity(frequency, impact) {
    if (frequency == "always" && impact == "blocker") {
        priority = "P0"
    } else if ((frequency == "always" && impact == "majority") || (frequency == "often" && impact == "blocker")) {
        priority = "P1"
    } else if ((frequency == "always" && impact == "minor") || (frequency == "often" && impact == "majority") || (frequency == "rarely" && impact == "blocker")) {
        priority = "P2"
    } else if ((frequency == "often" && impact == "minor") || (frequency == "rarely" && impact == "majority")) {
        priority = "P3"
    } else if (frequency == "rarely" && impact == "minor") {
        priority = "P4"
    }


    if (priority == "P0") {
        priorityMsg = "Critical: Stop release immediately"
    } else if (priority == "P1") {
        priorityMsg = "High: Review before release"
    } else if (priority == "P2") {
        priorityMsg = "Medium: Fix in next release"
    } else if (priority == "P3") {
        priorityMsg = "Low: Fix if time permits"
    } else if (priority == "P4") {
        priorityMsg = "Trivial: Fix when convenient"
    }

    console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: ${priorityMsg}`)




}

calculateBugSeverity("always", "blocker")