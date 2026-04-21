# Test Plan: VWO Login Page

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | Antigravity |
| **Date** | 2026-04-10 |
| **Environment** | Production |
| **Browser** | Chromium, Firefox, WebKit |

---

## 1. Introduction

This test plan describes the testing approach for **VWO Login Page**. It outlines the scope, test strategy, resources, schedule, and deliverables for the testing effort.

## 2. Objectives

- Verify core functionality works as expected
- Identify defects before production release
- Ensure user flows are complete and error-free
- Validate UI elements and navigation

## 3. Scope

### In Scope
- Email and password login validation (Valid/Invalid scenarios)
- "Toggle password visibility" button
- "Remember me" checkbox functionality
- "Forgot Password?" link navigation/functionality
- Third-party logins ("Sign in with Google", "Sign in using SSO", "Sign in with Passkey")
- "Start a FREE TRIAL" link navigation
- "Privacy policy" and "Terms" links navigation

### Out of Scope
- Functionalities inside the application post-login.
- Performance testing of the login system.
- Security and penetration testing.

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with @playwright/test
- **Test Type:** End-to-end functional testing
- **Browser:** Chromium, Firefox, WebKit
- **Environment:** Production

### Test Levels
- Smoke Testing (critical paths)
- Functional Testing (all features)
- Negative Testing (invalid inputs, error handling)

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://app.vwo.com/#/login |
| Browser | Chromium, Firefox, WebKit |
| OS | Cross-platform (Node.js) |
| Framework | Playwright v1.58+ |
| Reporter | HTML + JSON |

## 6. Entry Criteria

- Application is deployed and accessible
- Test environment is configured
- Test data is available
- Test cases are reviewed and approved

## 7. Exit Criteria

- All planned test cases executed
- All critical/high priority defects resolved
- Test report generated and reviewed
- No open blockers

## 8. Test Cases Summary

1. **TC_01: Verify successful login with valid credentials.**
2. **TC_02: Verify error message on login with invalid credentials.**
3. **TC_03: Verify password toggle visibility button toggles field type between password and text.**
4. **TC_04: Verify 'Remember me' checkbox selection state.**
5. **TC_05: Verify 'Forgot Password?' link redirects appropriately.**
6. **TC_06: Verify 'Sign in with Google' button triggers Google authentication flow.**
7. **TC_07: Verify 'Sign in using SSO' button opens SSO login page/modal.**
8. **TC_08: Verify 'Sign in with Passkey' button opens passkey prompt.**
9. **TC_09: Verify 'Start a FREE TRIAL' link opens the registration form in a new tab.**
10. **TC_10: Verify 'Privacy policy' and 'Terms' links navigate to the correct legal pages.**

## 9. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Application downtime | High | Use stable test environment |
| Flaky tests | Medium | Implement proper waits, no retries |
| Environment differences | Medium | Use consistent browser version |

## 10. Schedule

| Phase | Duration |
|-------|----------|
| Test Planning | 1 day |
| Test Case Design | 1 day |
| Test Execution | 1 day |
| Defect Reporting | Ongoing |
| Test Closure | 1 day |

## 11. Deliverables

- [x] Test Plan (this document)
- [ ] Test Cases Document
- [ ] Test Execution Report (HTML)
- [ ] Defect Reports (Jira tickets)
- [ ] Test Summary Report
