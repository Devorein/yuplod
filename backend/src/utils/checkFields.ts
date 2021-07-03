export function checkFields<T>(
  data: T,
  fields: (keyof T | [keyof T, (data: any) => string | true])[]
) {
  const messages: string[] = [];
  fields.forEach((field) => {
    if (typeof field === 'string') {
      if (data[field] === undefined || data[field] === null) {
        messages.push(`field:${field} is required`);
      }
    } else if (Array.isArray(field)) {
      const [fieldToCheck, callback] = field;
      if (data[fieldToCheck] !== undefined && data[fieldToCheck] !== null) {
        const result = callback(data[fieldToCheck]);
        if (typeof result === 'string') {
          messages.push(result);
        }
      } else {
        messages.push(`field:${fieldToCheck} is required`);
      }
    }
  });
  return messages;
}
