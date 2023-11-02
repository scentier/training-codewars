function sumWithoutHighestLowest(array: number[] | null): number {
  if (!array || array.length < 3) return 0;
  let sortArray = array.sort((a, b) => b - a).splice(1);
  sortArray.pop();
  let total: number;
  total = sortArray.reduce((a, b) => a + b);
  return total;
}

console.log(sumWithoutHighestLowest([4, 5, 4]));
