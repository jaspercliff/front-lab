


// TODO: array
// ====== 稀疏数组

console.log(Array(5)) // [ <5 empty items> ]

console.log([1, 2, , , 5])// [ 1, 2, <2 empty items>, 5 ]


// ================= method 
// ===== fill

const arr1 = [1, 2, 3, 4]

// fill 0 from 2 to 4
console.log(arr1.fill(0, 2, 4)) // 1 2 0 0

// fill 5 from 1
console.log(arr1.fill(5, 1)) // 1 5 5 5

console.log(arr1.fill(6))// 6 6 6 6

console.log(Array(4).fill(null))

// ===== slice

// 它会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组
console.log('slice')
let arr2 = arr1.slice(1, 3)
console.log(arr2)// 6 6

// 不带参数 复制一个副本
let arr3 = arr1.slice()
console.log(arr3)
