export function validatePassword(password: string) {
  const passwordValidationRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return passwordValidationRegex.test(password);
}
