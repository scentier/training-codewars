export const check = (a: (number | string)[], x: number | string): boolean => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
      return true;
    }
  }
  return false;
};
