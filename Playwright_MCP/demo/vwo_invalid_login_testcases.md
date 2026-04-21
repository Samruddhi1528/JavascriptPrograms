# Test Cases: VWO Login Page (Invalid Scenarios)

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | Antigravity |
| **Date** | 2026-04-10 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

### TC-001: Invalid Login with Unregistered Dummy Strings
| Field | Value |
|-------|-------|

| **TC ID** | TC-001 |
| **Title** | Verify login failure with unregistered dummy alphanumeric string |
| **Preconditions** | Navigate to VWO login page (`https://app.vwo.com/#/login`) |
| **Steps** | 1. Enter random dummy email: `jhjhdfgkj876@example.com`<br>2. Enter dummy password: `Test@1234`<br>3. Click 'Sign in' button |
| **Expected Result** | Display error message indicating invalid credentials ("Your email, password, IP address or location did not match"). Access to the dashboard should be denied. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_login.spec.ts` |

### TC-002: Invalid Login with Arabic Characters
| Field | Value |
|-------|-------|
| **TC ID** | TC-002 |
| **Title** | Verify login failure with Arabic characters in email field |
| **Preconditions** | Navigate to VWO login page (`https://app.vwo.com/#/login`) |
| **Steps** | 1. Enter Arabic characters in email: `المستخدم@example.com`<br>2. Enter dummy password: `كلمةالسر`<br>3. Click 'Sign in' button |
| **Expected Result** | System should gracefully handle the characters and reject the login, displaying an invalid credentials or invalid email format error. |
| **Priority** | Medium |
| **Category** | Negative |
| **Spec File** | `vwo_login.spec.ts` |

### TC-003: Invalid Login with Chinese Characters
| Field | Value |
|-------|-------|
| **TC ID** | TC-003 |
| **Title** | Verify login failure with Chinese characters in email field |
| **Preconditions** | Navigate to VWO login page (`https://app.vwo.com/#/login`) |
| **Steps** | 1. Enter Chinese characters in email: `测试@example.com`<br>2. Enter dummy password: `密码123`<br>3. Click 'Sign in' button |
| **Expected Result** | System should reject the credentials, validate the format, and show an error message without crashing. |
| **Priority** | Medium |
| **Category** | Negative |
| **Spec File** | `vwo_login.spec.ts` |

### TC-004: Invalid Login with Empty Fields
| Field | Value |
|-------|-------|
| **TC ID** | TC-004 |
| **Title** | Verify login failure when leaving email and password fields empty |
| **Preconditions** | Navigate to VWO login page (`https://app.vwo.com/#/login`) |
| **Steps** | 1. Leave email field empty<br>2. Leave password field empty<br>3. Click 'Sign in' button |
| **Expected Result** | System should display a validation error message prompting the user to enter their email and password. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_login.spec.ts` |

### TC-005: Invalid Login with SQL Injection String (Dummy Login)
| Field | Value |
|-------|-------|
| **TC ID** | TC-005 |
| **Title** | Verify login behavior when submitting a dummy SQL injection payload |
| **Preconditions** | Navigate to VWO login page (`https://app.vwo.com/#/login`) |
| **Steps** | 1. Enter SQL injection payload in email: `' OR 1=1; --`<br>2. Enter password: `' OR 1=1; --`<br>3. Click 'Sign in' button |
| **Expected Result** | Application should sanitize input, prevent SQL injection, and show a standard invalid credentials error message. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_login.spec.ts` |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 3 |
| Medium | 2 |
| Low | 0 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | 0 |
| Functional | 0 |
| Negative | 5 |
