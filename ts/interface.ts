
// interface 

interface Props {
  name: string,
  age: number
}

const receive: Props = {
  name: 'jasper',
  // Property 'age' is missing in type '{ name: string; }' but required in type 'props'. ts (2741) [39, 7]
  age: 20
}

console.log("interface", receive);


// ? 可选

interface Person {
  name: string,
  age?: number
}

const person: Person = {
  name: 'jasper'
}

console.log("?", person);


// ============= extends
interface User {
  id: number,
  name: string
}
interface Timestamp {
  createdAt: string
}

interface Admin extends User, Timestamp {
  role: string
}

const admin: Admin = {
  id: 1,
  name: 'jasper',
  role: 'admin',
  createdAt: '2020'
}

console.log(admin);

// interface 可以重复声明并合并
interface User1 {
  id: number
}

interface User1 {
  name: string
}

const user1: User1 = {
  id: 2,
  name: 'jasper'
}

console.log(user1);



//========================readonly 

interface User2 {
  readonly id: number
  name: string
}

const user2: User2 = {
  id: 1,
  name: 'Jasper',
}

// user2.id = 3
console.log(user2);

export { }

