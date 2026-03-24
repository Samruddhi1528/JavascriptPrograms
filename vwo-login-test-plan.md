# VWO Login Page Test Plan

## Application Overview

VWO Login Page is the primary authentication interface for Visual Website Optimizer. This test plan covers functional testing of the login form, password recovery flow, social authentication options, form validation, and user interface interactions. The application features email/password authentication, multiple alternative login methods (Google, SSO, Passkey), password visibility toggle, remember me functionality, and links to trial signup and legal documents.

## Test Scenarios

### 1. Login Form Validation & Entry

**Seed:** `tests/seed.spec.js`

#### 1.1. Submit login form with empty email and password fields

**File:** `tests/login/empty-form-submission.spec.ts`

**Steps:**
  1. -
    - expect: Login page displays with email and password input fields visible
  2. Click the Sign in button without entering credentials
    - expect: Error message 'Your email, password, IP address or location did not match' displays at the top of the form
    - expect: Email and password fields remain empty
  3. -
    - expect: Form remains on login page, not progressing to next step

#### 1.2. Submit login with email but no password

**File:** `tests/login/email-only-submission.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter test@example.com in email field
    - expect: Email field contains the entered value
  3. Leave password field empty and click Sign in
    - expect: Error message displays indicating invalid credentials
    - expect: User remains on login page

#### 1.3. Submit login with password but no email

**File:** `tests/login/password-only-submission.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Leave email field empty
    - expect: Email field is empty
  3. Enter password in password field and click Sign in
    - expect: Error message displays
    - expect: Login fails and user stays on login page

#### 1.4. Attempt login with invalid email format (missing @ symbol)

**File:** `tests/login/invalid-email-no-at-symbol.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter invalidemail in email field and password123 in password field
    - expect: Fields accept the input
  3. Click Sign in
    - expect: Server returns error for invalid credentials

#### 1.5. Attempt login with email missing domain extension

**File:** `tests/login/email-missing-domain-extension.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter test@example in email field (no extension like .com)
    - expect: Field accepts the input
  3. Add password and submit
    - expect: Appropriate error message displays

#### 1.6. Submit login with valid special characters in email

**File:** `tests/login/special-chars-in-email.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter test+tag@example.com in email field
    - expect: Email field accepts special character
  3. Add password and submit
    - expect: Form processes the email with special character correctly

#### 1.7. Submit login with very long email address

**File:** `tests/login/long-email-address.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter extremely long email (over 254 characters)
    - expect: System handles long email gracefully

#### 1.8. Submit login with non-existent account credentials

**File:** `tests/login/wrong-credentials.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter nonexistent@example.com and wrongpassword, then click Sign in
    - expect: Generic error message displays (not revealing if email exists)
    - expect: Security best practice maintained - error doesn't distinguish between wrong email and wrong password
    - expect: User remains on login page

### 2. Password Field Features

**Seed:** `tests/seed.spec.js`

#### 2.1. Toggle password visibility to show password text

**File:** `tests/login/password-visibility-toggle-show.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter testpassword123 in password field
    - expect: Password appears masked with dots/asterisks
  3. Click the Toggle password visibility button (eye icon)
    - expect: Password displays as plain text
    - expect: Eye icon changes appearance to indicate visible state

#### 2.2. Toggle password visibility to hide password text

**File:** `tests/login/password-visibility-toggle-hide.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter password and click visibility toggle to show it, then click toggle again
    - expect: Password becomes masked again
    - expect: Eye icon changes back to indicate hidden state

#### 2.3. Password field accepts special characters

**File:** `tests/login/password-accepts-special-chars.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter p@$$w0rd!#%& in password field
    - expect: Field accepts all special characters
    - expect: Masked display shows characters as dots
    - expect: Unmasked display shows actual special characters

#### 2.4. Password field accepts very long passwords

**File:** `tests/login/password-long-input.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter 100+ character password
    - expect: Field accepts entire long password
    - expect: No truncation of character input

### 3. Remember Me Feature

**Seed:** `tests/seed.spec.js`

#### 3.1. Enable Remember me checkbox

**File:** `tests/login/remember-me-toggle-on.spec.ts`

**Steps:**
  1. -
    - expect: Login page displays with Remember me checkbox unchecked by default
  2. Click Remember me checkbox
    - expect: Checkbox becomes checked
    - expect: Visual indication shows checked state

#### 3.2. Disable Remember me checkbox

**File:** `tests/login/remember-me-toggle-off.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Remember me to check it, then click it again
    - expect: Checkbox toggles back to unchecked state
    - expect: Visual feedback confirms toggle

#### 3.3. Submit login with Remember me enabled

**File:** `tests/login/remember-me-with-login.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter email and password, check Remember me, then click Sign in
    - expect: Login request includes remember me flag
    - expect: Browser stores remember me preference in cookies or local storage

### 4. Forgot Password Recovery

**Seed:** `tests/seed.spec.js`

#### 4.1. Navigate to Forgot Password page

**File:** `tests/login/forgot-password-navigate.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Forgot Password button
    - expect: Page navigates to forgot-password view
    - expect: URL changes to #/forgot-password
    - expect: Page title remains Login - VWO

#### 4.2. Verify all elements present on Forgot Password page

**File:** `tests/login/forgot-password-page-elements.spec.ts`

**Steps:**
  1. -
    - expect: Forgot Password page is displayed
  2. -
    - expect: Email address input field is visible
    - expect: Back button is present
    - expect: Reset Password button is present
    - expect: VWO logo is displayed

#### 4.3. Submit Reset Password form with empty email

**File:** `tests/login/forgot-password-empty-submit.spec.ts`

**Steps:**
  1. -
    - expect: Forgot Password page is displayed with empty email field
  2. Click Reset Password button
    - expect: Error message displays
    - expect: User remains on Forgot Password page

#### 4.4. Submit Reset Password with valid email

**File:** `tests/login/forgot-password-valid-email.spec.ts`

**Steps:**
  1. -
    - expect: Forgot Password page is displayed
  2. Enter valid email and click Reset Password
    - expect: Success message displays or confirmation shown
    - expect: Password reset email sent to user (or appropriate confirmation)

#### 4.5. Submit Reset Password with invalid email format

**File:** `tests/login/forgot-password-invalid-email.spec.ts`

**Steps:**
  1. -
    - expect: Forgot Password page is displayed
  2. Enter invalidemail in email field and click Reset Password
    - expect: Error message displays
    - expect: User remains on Forgot Password page

#### 4.6. Return to Login from Forgot Password page

**File:** `tests/login/forgot-password-back-navigation.spec.ts`

**Steps:**
  1. -
    - expect: Forgot Password page is displayed
  2. Click Back button
    - expect: Page navigates back to login (#/login)
    - expect: Login form is clean/empty for security
    - expect: VWO logo and all login elements display

### 5. Social Authentication Options

**Seed:** `tests/seed.spec.js`

#### 5.1. Verify all social login buttons are visible

**File:** `tests/login/social-buttons-visible.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Scroll to view social login options section
    - expect: Sign in with Google button is visible with icon
    - expect: Sign in using SSO button is visible with icon
    - expect: Sign in with Passkey button is visible with icon

#### 5.2. Click Sign in with Google button

**File:** `tests/login/google-signin-button.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Sign in with Google button
    - expect: User is redirected to Google OAuth consent screen OR appropriate error message displays

#### 5.3. Click Sign in using SSO button

**File:** `tests/login/sso-signin-button.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Sign in using SSO button
    - expect: SSO authentication flow initiates
    - expect: User is redirected to SSO provider OR configuration dialog appears

#### 5.4. Click Sign in with Passkey button

**File:** `tests/login/passkey-signin-button.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Sign in with Passkey button
    - expect: Passkey authentication flow initiates
    - expect: Biometric or security key prompt appears on compatible devices

### 6. Navigation Links and External URLs

**Seed:** `tests/seed.spec.js`

#### 6.1. Click Start a FREE TRIAL link

**File:** `tests/login/free-trial-link.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Start a FREE TRIAL link
    - expect: User navigates to VWO free trial page (https://vwo.com/free-trial/)

#### 6.2. Click Privacy Policy link

**File:** `tests/login/privacy-policy-link.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Privacy policy link
    - expect: User navigates to privacy policy page (https://vwo.com/privacy-policy/)

#### 6.3. Click Terms link

**File:** `tests/login/terms-link.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Click Terms link
    - expect: User navigates to terms page (https://vwo.com/terms/)

#### 6.4. Verify links contain appropriate UTM tracking parameters

**File:** `tests/login/link-utm-parameters.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. -
    - expect: Free trial link contains utm_medium=website, utm_source=login-page, utm_campaign
    - expect: Privacy policy link contains utm_medium=app, utm_source=login-page
    - expect: Terms link contains utm parameters for tracking

### 7. User Interface and Layout

**Seed:** `tests/seed.spec.js`

#### 7.1. Page title is correct

**File:** `tests/login/page-title-correctness.spec.ts`

**Steps:**
  1. -
    - expect: Browser page title is Login - VWO

#### 7.2. Login form layout and visual design

**File:** `tests/login/ui-visual-layout.spec.ts`

**Steps:**
  1. -
    - expect: VWO logo displays at top center
    - expect: Email and password input fields are visible and properly aligned
    - expect: All buttons are clearly visible
    - expect: Form spacing is appropriate

#### 7.3. Email field has focus on page load

**File:** `tests/login/default-focus-email.spec.ts`

**Steps:**
  1. -
    - expect: Login page loads
  2. -
    - expect: Email address field has cursor/focus
    - expect: User can immediately type without clicking field

#### 7.4. Input fields display correct placeholder text

**File:** `tests/login/input-placeholders.spec.ts`

**Steps:**
  1. -
    - expect: Email field displays placeholder Enter email ID
  2. -
    - expect: Password field displays placeholder Enter password

#### 7.5. Error messages display with proper styling

**File:** `tests/login/error-message-styling.spec.ts`

**Steps:**
  1. Submit form with empty fields
    - expect: Error message appears prominently at top
    - expect: Error has distinctive red/warning color
    - expect: Error icon is clearly visible

#### 7.6. Login form responsive on mobile (375x667)

**File:** `tests/login/mobile-responsive-375.spec.ts`

**Steps:**
  1. -
    - expect: Login page displays on mobile viewport
  2. -
    - expect: All form elements visible without horizontal scroll
    - expect: Email and password fields are usable
    - expect: Sign in button is easily clickable

#### 7.7. Login form responsive on tablet (768x1024)

**File:** `tests/login/tablet-responsive-768.spec.ts`

**Steps:**
  1. -
    - expect: Login page displays on tablet viewport
  2. -
    - expect: Form utilizes screen space efficiently
    - expect: All elements remain properly aligned

### 8. Keyboard Accessibility

**Seed:** `tests/seed.spec.js`

#### 8.1. Tab key navigates through form fields in logical order

**File:** `tests/login/tab-key-navigation.spec.ts`

**Steps:**
  1. -
    - expect: Email field has initial focus
  2. Press Tab key
    - expect: Focus moves to password field
  3. Press Tab again
    - expect: Focus moves to password visibility toggle button
  4. Continue pressing Tab
    - expect: Focus cycles through all interactive elements in logical order

#### 8.2. Pressing Enter in password field submits form

**File:** `tests/login/enter-key-in-password.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter email and password, then press Enter
    - expect: Login form is submitted
    - expect: Server processes login request

#### 8.3. Clear field content using keyboard shortcuts

**File:** `tests/login/keyboard-field-clear.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Enter text in email field
    - expect: Text appears in field
  3. Select all with Ctrl+A and delete
    - expect: Email field is completely cleared

### 9. Security and Data Protection

**Seed:** `tests/seed.spec.js`

#### 9.1. Error messages don't reveal user account information

**File:** `tests/login/generic-error-messages.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Attempt login with nonexistent@example.com
    - expect: Generic error message displays
    - expect: Message doesn't indicate if email exists or password is wrong

#### 9.2. Login page uses HTTPS encryption

**File:** `tests/login/https-encryption.spec.ts`

**Steps:**
  1. -
    - expect: Login page URL is https://app.vwo.com/#/login
  2. -
    - expect: Page loads securely with valid SSL certificate

#### 9.3. Password is not visible in network requests

**File:** `tests/login/password-not-logged.spec.ts`

**Steps:**
  1. -
    - expect: Browser DevTools Network tab open
  2. Submit login with credentials
    - expect: Network requests use HTTPS
    - expect: Password not visible in plain text in request payloads

#### 9.4. Multiple failed attempts trigger rate limiting

**File:** `tests/login/rate-limiting.spec.ts`

**Steps:**
  1. -
    - expect: Login page is displayed
  2. Submit login 5+ times with wrong credentials rapidly
    - expect: After threshold, account is locked or additional verification required
    - expect: User is informed of security measure

#### 9.5. Page source doesn't contain hardcoded credentials or tokens

**File:** `tests/login/page-source-clean.spec.ts`

**Steps:**
  1. -
    - expect: View page source (right-click > View Page Source)
  2. -
    - expect: No hardcoded user credentials visible
    - expect: No API keys or sensitive tokens exposed

### 10. Browser Compatibility

**Seed:** `tests/seed.spec.js`

#### 10.1. Login works correctly in Chrome browser

**File:** `tests/login/chrome-compatibility.spec.ts`

**Steps:**
  1. -
    - expect: Login page loads in Chrome

#### 10.2. Login works correctly in Firefox browser

**File:** `tests/login/firefox-compatibility.spec.ts`

**Steps:**
  1. -
    - expect: Login page loads in Firefox

#### 10.3. Login works correctly in Safari browser

**File:** `tests/login/safari-compatibility.spec.ts`

**Steps:**
  1. -
    - expect: Login page loads in Safari

#### 10.4. Login works correctly in Microsoft Edge browser

**File:** `tests/login/edge-compatibility.spec.ts`

**Steps:**
  1. -
    - expect: Login page loads in Edge
