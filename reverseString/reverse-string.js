export default function reverseString(string) {
  if (typeof(string) !== 'string') throw new 'Invalid input';

  return string.split('').reverse().join('');
}