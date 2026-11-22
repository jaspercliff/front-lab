// TypeScript 默认可能将你的文件视为全局脚本，而不是独立模块
//这样这个文件就变成了一个 Module（模块），顶层变量不会再与其他文件的变量冲突。
export { }

let name: string = 'jasper'
let age: number = 20
let price: number = 9.9 // 可以表示整数和浮点数
let enabled: boolean = false
// 也可以 let hobby : Array[string] = []
let hobby: string[] = ['smoke', 'drunk']


// TS 的类型主要在编译阶段存在，运行时不会保留这些类型
//  Type 'number' is not assignable to type 'string'. ts (2322) [3, 1]
// name = 123

console.log(name);
console.log(age);
console.log(price);
console.log(enabled);
console.log(hobby);



// object
const user: {
  name: string,
  age: number
} = {
  name: 'jasper',
  age: 20
}

console.log("object", user);


// 联合类型 ｜ 表示一个变量可以是多种类型之一。

let id: string | number

id = 100
id = '100'

//  Type 'boolean' is not assignable to type 'string | number'. ts (2322) [67, 1]
// id = true
console.log("|", id);


// tuple 元组可以规定数组的长度，以及每个位置的数据类型

const user1: [string, number] = ['jasper', 2]
console.log("tuple", user1);

//any 表示不进行类型检查，几乎可以接收任意类型。
let val: any = 10
console.log("any", val);

// unknown 表示我不知道具体类型，但我不会允许你未经检查就使用它。

let val1: unknown = 'hello'

// val1 = 123

if (typeof val1 === 'string') {
  console.log("unknown", val1.toUpperCase());
}

function sayHello(): void {
  console.log("hello");
}


sayHello()

// enum 

enum Direction {
  up = 0,
  down = 'hello'
}

const val2: Direction = Direction.up
console.log('enum(recommand 联合变量）', val2);


function add(a: number, b: number) {
  return a + b
}

console.log(add(1, 2));

const add1 = (a: number, b: number): number => {
  return a + b
}

add1(2, 3)
