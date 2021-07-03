export function checkFields<T>(data: T, fields: (keyof T)[]) {
  const messages: string[] = [];
  fields.forEach((field) => {
    if (data[field] === undefined || data[field] === null) {
      messages.push(`field:${field} is required`);
    }
  });
  return messages;
}
