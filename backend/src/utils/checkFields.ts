/**
 * Checks if the fields exists on the provided data, and also run a validator against them
 * @param data The object where the fields should be checked
 * @param fields An array of string or tuple [fieldName, cb] to iterate over
 * @returns
 */
export function checkFields<T>(
  data: T,
  fields: (keyof T | [keyof T, (data: any) => string | true])[]
) {
  const messages: { field: string; message: string }[] = [];
  fields.forEach((field) => {
    if (typeof field === 'string') {
      if (data[field] === undefined || data[field] === null) {
        messages.push({ field, message: `${field} is required` });
      }
    } else if (Array.isArray(field)) {
      const [fieldToCheck, callback] = field;
      if (data[fieldToCheck] !== undefined && data[fieldToCheck] !== null) {
        const result = callback(data[fieldToCheck]);
        if (typeof result === 'string') {
          messages.push({ field: fieldToCheck as string, message: result });
        }
      } else {
        messages.push({
          field: fieldToCheck as string,
          message: `${fieldToCheck} is required`
        });
      }
    }
  });
  return messages;
}
