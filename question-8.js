const item = [
  { name: '콜라', stock: 5 },
  { name: '사이다', stock: 0 },
  { name: '물', stock: 10 },
  { name: '주스', stock: 2 },
];

// todo-1 재고가 하나라도 있는지 확인하시오.
// ? some()
const hasStock = item.some((item) => {
  return item.stock;
}, 0);

console.log(hasStock); // true
