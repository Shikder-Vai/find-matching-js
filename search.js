const items = [
  { name: "Realme 2pro", price: 12000 },
  { name: "Oppo 2pro", price: 22000 },
  { name: "Iphone 13Max pro", price: 120000 },
  { name: "Realme laptop", price: 40000 },
  { name: "Samsung s10", price: 60000 },
  { name: "One plus pro", price: 38000 },
  { name: "I pad", price: 50000 },
];
// function allProducts(items, searchText) {
//   for (const item of items) {
//     if (item.name.includes(searchText)) {
//       console.log(item);
//     }
//   }
// }
// let searchInput = "pro";
// allProducts(items, searchInput);

//showing by extra array

function allProducts(items, searchText) {
  let results = [];
  for (const item of items) {
    if (item.name.includes(searchText)) {
      results.push(item);
    }
  }
  return results;
}
let searchInput = "pro";
console.log(allProducts(items, searchInput));
