// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

let addValToArr = (arr: any[], index: number, value: any) => {
  arr.splice(index, 0, value);
  return arr;
};

let orgArr: number[] = [2, 4, 8, 0];
console.log(orgArr);

let modArr = addValToArr(orgArr, 2, 6);
console.log(modArr);
