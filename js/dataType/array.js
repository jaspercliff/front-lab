


// ====== 稀疏数组

console.log(Array(5)) // [ <5 empty items> ]

console.log([1, 2, , , 5])// [ 1, 2, <2 empty items>, 5 ]


// ================= method 

const arr1 = [1, 2, 3, 4]

// fill 0 from 2 to 4
console.log(arr1.fill(0, 2, 4)) // 1 2 0 0

// fill 5 from 1
console.log(arr1.fill(5, 1)) // 1 5 5 5

console.log(arr1.fill(6))// 6 6 6 6

console.log(Array(4).fill(null))
