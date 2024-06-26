const item = [
  { name: '콜라', price: 1000 },
  { name: '사이다', price: 1200 },
  { name: '물', price: 800 },
  { name: '주스', price: 1500 },
];

// forEach가 안되는 이유 -> forEach 검색할 것
const itemList = item.forEach((item) => {
  return `${item.name} : ${item.price}원`;
});
// const itemList = item.map((item) => {
//   return `${item.name} : ${item.price}원`;
// });

console.log(itemList); // [ '콜라 : 1000원', '사이다 : 1200원', '물 : 800원', '주스 : 1500원' ]
