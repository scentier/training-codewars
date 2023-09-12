export function isIsogram(str: string): boolean {
  let array = str.toLowerCase().split("").sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("carpnikhtoyjgbm"));
