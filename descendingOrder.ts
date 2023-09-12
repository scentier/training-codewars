function descendingOrder(n: number): number {
  const inputArray: string[] = n.toString().split("");

  const sorted = inputArray.map(Number).sort((a, b) => {
    return b - a;
  });

  let concatSorted: string = "";
  sorted.forEach((element) => {
    concatSorted += element.toString();
  });
  return parseInt(concatSorted);
}

console.log(descendingOrder(234));
