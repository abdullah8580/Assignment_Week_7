// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

let addItems = (arr: string[], ...items: string[]): string[] => {
  arr.splice(0, 0, ...items);
  console.log(`Following Items are present in your cart:\n${cart}`);
  return arr;
};

let removeItems = (
  arr: string[],
  delStart: number,
  delItems: number
): string[] => {
  arr.splice(delStart, delItems);
  console.log(`Following Items are present in your cart:\n${cart}`);
  return arr;
};

let updateItems = (arr: string[]) => {
  console.log(`${arr.length} items are present in your cart`);
  console.log(`Following Items are present in your cart:\n${cart}`);
};

let cart: string[] = [];
cart = addItems(cart, "CPU", "Motherboard", "GPU", "RAM");

removeItems(cart, 1, 2);

updateItems(cart);
