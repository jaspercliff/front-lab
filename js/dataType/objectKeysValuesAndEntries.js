let user = {
  name: 'jasper',
  age: 30
}

//return is array  object -> array
for (let value of Object.keys(user)) {
  console.log(value)
}
for (let value of Object.values(user)) {
  console.log(value)
}

let entries = Object.entries(user)
console.log(entries)

// 对象缺少数组存在的许多方法，例如 map 和 filter 等。
let prices = {
  apple: 1,
  banan: 2
}

let doublePrice = Object.fromEntries(
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrice)

let sum = Object.values(prices).reduce((a, b) => a + b, 0)
console.log(sum)
