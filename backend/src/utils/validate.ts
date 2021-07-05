/**
 * Validates a passed input email
 * @param email Input Email to validate
 * @returns Whether the passed email input is valid
 */
export function validateEmail(email: string) {
  const emailValidationRegex = /^[^\s@]+@[^\s@]+$/;
  return emailValidationRegex.test(email);
}

/**
 * Validates a passed input password
 * @param email Input password to validate
 * @returns Whether the passed password input is valid
 */
export function validatePassword(password: string) {
  const passwordValidationRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return passwordValidationRegex.test(password);
}
