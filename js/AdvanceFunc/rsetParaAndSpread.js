// ================rset
// rset 参数 类似java 可变参数 String ...args 
// rset 参数必须放到参数列表最后面 


function test(...args) {
  console.log(args)
}

test('java', 'js', 'rust')


// ================spread 语法

let arr = [3, 5, 1]

// ...参数将可迭代对象展开到数组中
console.log(Math.max(...arr))

// 合并数组 

let arr1 = [2, 4, 6]

let str = "hello"

let mergerd = [0, ...str, ...arr, ...arr1]
console.log(mergerd)

// array copy  shallow copy

let arrCopy = [...arr]

console.log(arrCopy)
console.log(arr === arrCopy) //shallow
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy))
