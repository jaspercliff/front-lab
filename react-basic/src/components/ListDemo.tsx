import { list } from '../data/demo'

function ListDemo() {
  return (
    <div>
      <h3>列表渲染</h3>

      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListDemo
