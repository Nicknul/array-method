// todo 이름과 가격을 키와 값의 쌍으로 가지는 객체를 생성하시오.
const items = [
  { name: '콜라', price: 1000 },
  { name: '사이다', price: 1200 },
  { name: '물', price: 800 },
  { name: '주스', price: 1500 },
];
// ? reduce()
const itemObject = items.reduce((obj, item) => {
  obj[item.name] = item.price;
  return obj;
}, {});

console.log(itemObject);
