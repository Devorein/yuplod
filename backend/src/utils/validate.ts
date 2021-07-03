export function validateEmail(email: string) {
  const emailValidationRegex = /^[^\s@]+@[^\s@]+$/;
  return emailValidationRegex.test(email);
}

export function validatePassword(password: string) {
  const passwordValidationRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return passwordValidationRegex.test(password);
}
