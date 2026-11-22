
// 联合类型 和字面量 

type Status1 = 'success' | 'error'

let status1: Status1 = 'success'

// Type '"loading"' is not assignable to type 'Status'. ts (2322) [78, 5]
// let status: Status = 'loading'
console.log(status1);


// interface and type都可以描述对象类型
// type 可以定义联合类型
type Status = 'success' | 'error' | 'loading'

type User = {
  id: number
  name: string
}

type Admin = {
  role: string
}

// type 可以使用交叉类型 &
type AdminUser = User & Admin

const admin: AdminUser = {
  id: 1,
  name: 'Jasper',
  role: 'admin'
}


// type 可以给类型起名字 也可以定义对象 联合类型

type CustomType = number

const id1: CustomType = 100

console.log(id1);


type Project = {
  id: number,
  name: string
}

let project: Project = { id: 1, name: 'jasper' }
console.log(project);
