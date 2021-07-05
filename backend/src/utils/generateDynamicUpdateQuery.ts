/**
 * Dynamically generates sql update code based on dynamic input
 * @param data Payload to check for fields
 * @param fields The fields to check
 * @returns a tuple of updateOperation String and the params
 */
export function generateDynamicUpdateQuery<T>(data: T, fields: (keyof T)[]) {
  const updateOperations: string[] = [],
    params: any[] = [];
  fields.forEach((field) => {
    if (data[field] !== null && data[field] !== undefined) {
      updateOperations.push(`${field} = $${updateOperations.length + 1}`);
      params.push(data[field]);
    }
  });
  return [
    updateOperations.length !== 0 ? updateOperations.join(',') + ',' : '',
    params
  ] as const;
}
