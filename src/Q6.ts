// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let newArr: number[] = [1, 2, 3, -10, 6, 4, -8, 19];

for (let i = 1; i <= newArr.length; i++) {
  if (newArr[i] < 0) {
    newArr.splice(i, 1);
  }
}

console.log(newArr);
