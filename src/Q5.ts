// Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

let fictorial = (num: number) => {
  if (num == 0 || num == 1) {
    return 1;
  } else if (num > 1) {
    let numResult = 1;
    for (let i = 1; i <= num; i++) {
      numResult = numResult * i;
    }
    return numResult;
  }
};

console.log(fictorial(5));
