/*


Test Environment Config
In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes
an environment name stored in a variable and prints the base URL, API key pattern, and timeout. 
Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. 
Each has different base URL, API key prefix, timeout, and description.

Input:
envName = "staging"
Output:
Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror
*/

function testEnvConfig(environment) {
    let baseURL;
    let APIKey;
    let timeOut;
    let description

    switch (environment) {
        case "dev":
            baseURL = "https://staging-api.testingacademy.com/dev"
            APIKey = "dev_key_xxxx-xxxx"
            timeOut = "5000ms"
            description = "Dev - Development environment"
            break
        case "staging":
            baseURL = "https://staging-api.testingacademy.com/stage"
            APIKey = "stg_key_xxxx-xxxx"
            timeOut = "8000ms"
            description = "Staging - Pre-production mirror"
            break
        case "qa":
            baseURL = "https://staging-api.testingacademy.com/qa"
            APIKey = "qa_key_xxxx-xxxx"
            timeOut = "10000ms"
            description = "QA - Quality Assurance environment"
            break
        case "production":
            break
        default:
            break
    }
    console.log(`Environment: ${environment} Base URL: ${baseURL} API Key: ${APIKey} Timeout: ${timeOut} Description: ${description}`)
}


testEnvConfig("staging")
