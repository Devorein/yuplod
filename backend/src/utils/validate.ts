export function validateEmail(email: string) {
  const emailValidationRegex = /^[^\s@]+@[^\s@]+$/;
  return emailValidationRegex.test(email);
}

export function validatePassword(password: string) {
  const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8}$/;
  return passwordValidationRegex.test(password);
}
