// todo-1 가격이 1000원 이상이 상품만 나열하도록 수정하라.
const item = [
  { name: '콜라', price: 1000 },
  { name: '사이다', price: 1200 },
  { name: '물', price: 800 },
  { name: '주스', price: 1500 },
];
// ? filter()
const expensiveItem = item.filter((item) => {
  return item.price >= 1000;
});
console.log(expensiveItem);
/**
[
  { name: '콜라', price: 1000 },
  { name: '사이다', price: 1200 },
  { name: '주스', price: 1500 }
]
 */
