function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const upperBound = range.reduce((prod, curr) => prod * curr);
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1,5]);