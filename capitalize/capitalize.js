export default function capitalize(string) {
  if (typeof(string) !== 'string') {
    throw new 'Invalid input'
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
