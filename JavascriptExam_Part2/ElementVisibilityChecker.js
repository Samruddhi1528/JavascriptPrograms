/*
Element Visibility Checker
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them.
Write a JavaScript program that 
checks an element's properties (isPresent, isDisplayed, isEnabled) 
and prints the appropriate action a QA engineer should take. 
Use strict equality (===), logical operators (&&, ||), 
and the ternary operator for severity level.

States: 
READY (all true),
DISABLED (present+displayed but not enabled),
HIDDEN (present but not displayed),
NOT FOUND (not present).

Severity:
CRITICAL (not present),
WARNING (not displayed or not enabled),
OK (all good).


Input:
isPresent = true, isDisplayed = true, isEnabled = false
Output:
Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.

*/


let isPresent;
let isDisplayed;
let isEnabled;
let action;
let elementState = "";
let severity = "";

function checkElementVisibility(isPresent, isDisplayed, isEnabled) {
    if (isPresent === true && isDisplayed === true && isEnabled === true) {
        elementState = 'READY'
        action = "Element is visible and displayed, you can perform the action"
    }
    else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        elementState = 'DISABLED'
        action = "Element is visible but disabled. Wait for enable state or check preconditions."
    }
    else if (isPresent === true && isDisplayed === false) {
        elementState = 'HIDDEN'
        action = "Element is present but not displayed. Wait for enable state or check preconditions."
    }
    else if (!isPresent) {
        elementState = 'NOT FOUND'
        action = "Element is not found on web page"
    }

    severity =
        !isPresent ? "CRITICAL"
            : (!isDisplayed || !isEnabled) ? "WARNING"
                : "OK";

    // CRITICAL (not present),
    // WARNING (not displayed or not enabled),
    // OK (all good)



    console.log(`Status: ${elementState} Severity: ${severity} Action: ${action} `)
}

checkElementVisibility(true, true, false)