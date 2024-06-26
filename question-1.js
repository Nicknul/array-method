const item = [
  { name: '콜라', stock: 5 },
  { name: '사이다', stock: 0 },
  { name: '물', stock: 10 },
  { name: '주스', stock: 0 },
];

//재고가 있는 상품만 나열하도록 수정
// ? filter 사용
const availableItem1 = item.filter((item) => {
  return item.stock > 0;
}); // [ { name: '콜라', stock: 5 }, { name: '물', stock: 10 } ]

// const availableItem2 = item.filter((item) => {
//   return item.stock > 0;
// });
// const availableItem3 = item.filter((item) => {
//   return item.stock > 0;
// });

console.log(availableItem1);
