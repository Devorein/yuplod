export function parseDate(dateString: string) {
  const date = new Date(dateString);
  return `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
