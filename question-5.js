const item = [
  { name: '콜라', stock: 5 },
  { name: '사이다', stock: 0 },
  { name: '물', stock: 10 },
  { name: '주스', stock: 2 },
];

// 이해가 난해, 좀 찾아볼 것

// ? reduce()
const totalStock = item.reduce((total, item) => {
  return total + item.stock;
}, 0);

console.log(totalStock);
