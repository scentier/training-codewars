export function switchItUp(intNumber: number): string {
  let output = "";
  switch (intNumber) {
    case 0:
      output = "Zero";
      break;
    case 1:
      output = "One";
      break;
    case 2:
      output = "Two";
      break;
    case 3:
      output = "Three";
      break;
    case 4:
      output = "Four";
      break;
    case 5:
      output = "Five";
      break;
    case 6:
      output = "Six";
      break;
    case 7:
      output = "Seven";
      break;
    case 8:
      output = "Eight";
      break;
    case 9:
      output = "Nine";
      break;
  }

  return output;
}

console.log(switchItUp(0));
