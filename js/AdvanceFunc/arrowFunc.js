function addFunc(a, b) {
  return a + b
}

// 当箭头后面使用 {} 时，代表函数体，需要自己写 return 才会返回值
const add = (a, b) => { return a + b }


const add1 = (a, b) => a + b

// 返回对象特殊写法 


const creatUser = () => {
  return {
    name: 'jasper',
    age: '20'
  }
}

const creatUser1 = () => ({
  name: 'jasper',
  age: '20'
})

console.log(add(1, 2))
console.log(add1(1, 2))

// 箭头函数没有自己的 this，它会继承定义时外层作用域的 this（词法 this）
// 箭头函数中的 this 与外部 this 一致。
// 它并不指向 obj
console.log("外部 this:", this)

const obj = {
  name: "Jasper",

  sayHello: () => {
    console.log("箭头函数 this:", this)
    console.log("this.name:", this.name)
  }
}

obj.sayHello()
