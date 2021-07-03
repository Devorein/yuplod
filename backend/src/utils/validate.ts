export function validateEmail(email: string) {
  const emailValidationRegex = /^[^\s@]+@[^\s@]+$/;
  return emailValidationRegex.test(email);
}
