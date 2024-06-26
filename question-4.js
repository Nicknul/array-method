const item = [
  { name: '콜라', stock: 5 },
  { name: '사이다', stock: 0 },
  { name: '물', stock: 10 },
  { name: '주스', stock: 2 },
];
// ? filter()
const sodaFilter = item.filter((item) => {
  return item.name === '사이다';
});
console.log(sodaFilter); // [ { name: '사이다', stock: 0 } ]

// ? find()
const sodaFind = item.find((item) => {
  return item.name === '사이다';
});
console.log(sodaFind); // { name: '사이다', stock: 0 }
