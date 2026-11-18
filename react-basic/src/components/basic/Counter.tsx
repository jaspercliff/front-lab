import { useState } from "react"

//通常你会希望你的组件 “记住” 一些信息并展示出来，比如一个按钮被点击的次数。要做到这一点，你需要在你的组件中添加 state。
//你将从 useState 中获得两样东西：当前的 state（count），以及用于更新它的函数（setCount）。
//你可以给它们起任何名字，但按照惯例会像 [something, setSomething] 这样为它们命名
//useState 是 React 提供的一个内置 Hook
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
