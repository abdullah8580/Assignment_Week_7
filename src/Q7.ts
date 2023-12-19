// Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.

let addArr = (arr: number[]) => {
  let sumItem = 0;
  for (let item of arr) {
    sumItem += item;
  }
  return sumItem;
};

let Arr1 = [1, 2, 3, 4];

console.log(addArr(Arr1));
