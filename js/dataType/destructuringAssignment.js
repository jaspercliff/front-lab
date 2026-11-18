// let {prop : varName = default, ...rest} = object
// let [item1 = default, item2, ...rest] = array
// 函数可能不需要整个对象/数组，而只需要其中一部分。
// 解构赋值 是一种特殊的语法，它使我们可以将数组或对象“拆包”至一系列变量中

let arr = ["jasper", "cliff"]

// firstName = arr[0]
// lastName = arr[1]
// let [firstName, lastName] = arr

let [firstName, lastName] = 'jasper,cliff'.split(',')
console.log(firstName)
console.log(lastName)

let user = {};

//  左侧可以是任何被赋值的东西  右侧是任何可迭代对象
//  使用额外的，丢弃不想要的内容
[user.a, , user.c] = "abc"

console.log(user)

// =========== Object.entries;
for (let [key, val] of Object.entries(user)) {
  console.log(key, val)
}


// =========== map

let map = new Map();
map.set("name", "jasper")
map.set("age", 20)

for (let [key, val] of map) {
  console.log(key, val)
}


// =========== swap two var 

let guest = 'guest';
let admin = 'admin';

[guest, admin] = [admin, guest]

console.log("admin = ", admin)
console.log("guest = ", guest)


// =========== ... 

//如果数组比左边的列表长，那么“其余”的数组项会被省略。
let [a, b] = ["jasper", "cliff", "test", "java"]
console.log(a)
console.log(b)
let [c, d, ...rest] = ["jasper", "cliff", "test", "java"]
console.log(rest[0])
console.log(rest[1])

// 默认值
let [testDefault = "Guest", surname = "Anonymous"] = ["Julius"]
console.log(testDefault)// julius



// ================== object 

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// 仅提取 title 作为变量
// let { title } = options;
// console.log(title)

let { title, ...restObj } = options;
console.log(title)
console.log(restObj.width)
console.log(restObj.height)

// =================nest 

let nest = {
  size: {
    big: 1,
    small: 2
  },
  items: ["cake", "smoke"]
}

let { size: { big, small }, items: [item1, item2] } = nest
console.log(big)
console.log(small)
console.log(item1)
console.log(item2)
