const str = 'Hello World'

// 找到了：返回匹配内容的索引位置（从 0 开始）
// 没找到：返回 -1
console.log(str.indexOf('Hello')) // 0
console.log(str.indexOf('World')) // 6
console.log(str.indexOf('o'))     // 4
console.log(str.indexOf('Java'))  // -1
