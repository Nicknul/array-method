const item = [
  { name: '콜라', stock: 5 },
  { name: '사이다', stock: 0 },
  { name: '물', stock: 10 },
  { name: '주스', stock: 2 },
];
// ? map()
const itemNameMap = item.map((item) => {
  return item.name;
});
console.log(itemNameMap);

// ? Filter
const itemNameFilter = item.filter((item) => {
  return item.name;
});
console.log(itemNameFilter);
