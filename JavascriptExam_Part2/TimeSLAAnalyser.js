/*Response Time SLA Analyzer
As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that analyzes an array of response times 
and
prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms).
Use comparison operators for min/max tracking.

Input:
responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
Output:
Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

*/

let responseTimes = [120, 230, 450, 510, 180, 620]
let slaLimit = 500
let minResponse = responseTimes[0]
let maxResponse = responseTimes[0]
let totalResponse = 0
let slaBreaches = 0
let averageResponse
let overallStatus

for (let i = 0; i < responseTimes.length; i++) {
    totalResponse += responseTimes[i]
    if (responseTimes[i] < minResponse) {
        minResponse = responseTimes[i]
    }
    if (responseTimes[i] > maxResponse) {
        maxResponse = responseTimes[i]
    }
    if (responseTimes[i] > slaLimit) {
        slaBreaches++
    }
}
averageResponse = totalResponse / responseTimes.length
overallStatus = slaBreaches > 0 ? " SLA VIOLATED" : "✅ SLA MET"

console.log(`Total Requests: ${responseTimes.length} Min Response: ${minResponse}ms Max Response: ${maxResponse}ms SLA Breaches: ${slaBreaches} (${(slaBreaches / responseTimes.length) * 100}%) Overall Status: ${overallStatus}`)