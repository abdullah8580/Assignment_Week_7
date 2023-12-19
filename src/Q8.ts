// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.

let cTemp: number[] = [20, 14, 32, 29];
let fTemp: number[] = [];

for (let temp of cTemp) {
  (temp * 9) / 5 + 32;
  fTemp.push((temp * 9) / 5 + 32);
}

console.log(fTemp);
