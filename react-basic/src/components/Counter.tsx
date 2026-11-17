import { useState } from "react"

function Counter() {

  // const [状态变量, 修改状态的方法] = useState(初始值)
  const [count, setCount] = useState(0)
  function handleClick() {
    // 状态是只读的 应该去替换而不是修改 count++ 视图不会更新
    setCount(count + 1)
  }

  const [obj, setObj] = useState({ name: 'jasper' })

  const handleObj = () => {
    setObj({
      // 把原对象的属性复制到新对象。
      // 再将 name 覆盖成 cliff
      ...obj,
      name: 'cliff'
    }
    )
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleObj}>{obj.name}</button>
    </div>
  )
}

export default Counter
