export default function analyzeArray(vector) {
  if (!Array.isArray(vector)) throw new 'Invalid input';

  const containsNumber = vector.every((e) => {
    return !Number.isNaN(+e);
  });

  if (!containsNumber) {
    throw new 'Invalid input';
  }

  return {
    average: Math.floor(vector.reduce((accumulator, current) => accumulator + +current, 0) / vector.length) || 0,
    min: vector.reduce((min, current) => +current < min ? +current : min, vector[0]) || 0,
    max: vector.reduce((max, current) => +current > max ? +current : max, vector[0]) || 0,
    length: vector.length
  };
}