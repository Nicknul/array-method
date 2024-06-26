const item = [
  { name: '콜라', stock: 5 },
  { name: '사이다', stock: 0 },
  { name: '물', stock: 10 },
  { name: '주스', stock: 2 },
];

// 매개 변수 a, b는 규칙이다. 대체로 작은 index는 a, 큰 수의 index는 b로 지정한다.
const sortedItems = item.sort((a, b) => {
  return b.stock - a.stock;
});

console.log(sortedItems);
/** 
[
  { name: '물', stock: 10 },
  { name: '콜라', stock: 5 },
  { name: '주스', stock: 2 },
  { name: '사이다', stock: 0 }
]
 */
