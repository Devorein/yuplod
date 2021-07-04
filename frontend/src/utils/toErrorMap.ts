import { FieldError } from '../types';

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach((error) => {
    if (error.field) errorMap[error.field] = error.message;
  });
  return errorMap;
};
