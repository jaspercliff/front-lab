// 父组件通过 Props 将数据传给子组件，子组件通过回调函数通知父组件发生了什么
interface User {
  id: number
  name: string
  age: number
  skills: string[]
  isFollowing: boolean
}

interface UserCardProps {
  user: User
  // 用户点击了关注通知父组件
  onFollow: (userId: number) => void
}

function UserCard({ user, onFollow }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>

      <p>年龄：{user.age}</p>

      <p>技能：{user.skills.join(', ')}</p>

      <button onClick={() => onFollow(user.id)}>
        {user.isFollowing ? '已关注' : '关注'}
      </button>
    </div>
  )
}

export default function UserCardComponent() {
  const users: User[] = [
    {
      id: 1,
      name: 'Tom',
      age: 18,
      skills: ['Java', 'Spring'],
      isFollowing: false
    },
    {
      id: 2,
      name: 'Jerry',
      age: 20,
      skills: ['React', 'TypeScript'],
      isFollowing: true
    }
  ]

  function handleFollow(userId: number) {
    console.log('关注用户：', userId)
  }

  return (
    <div>
      <h1>用户列表</h1>

      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          // 父组件向子组件传递对象
          onFollow={handleFollow}
        />
      ))}
    </div>
  )
}
