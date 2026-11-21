import { useState } from 'react'
import ColorDemo from './components/basic/ColorDemo'
import ConditionalDemo from './components/basic/ConditionalDemo'
import Counter from './components/basic/Counter'
import EventBind from './components/basic/EventBind'
import JsExpressionDemo from './components/basic/jsExpressionDemo'
import ListDemo from './components/basic/ListDemo'
import Toolbar from './components/basic/Toolbar'
import Profile from './components/official/Profile'
import ShoppingList from './components/official/ShoppingList'
import MyButton from './components/official/MyButton'
import Game from './components/chess/Chess'
import FilterableProductTable from './components/official/FilterableProductTable'



function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {
        false && (
          <div>
            <h1>React Basic</h1>

            <JsExpressionDemo />
            <ListDemo />
            <ConditionalDemo />
            <ColorDemo />
            <EventBind />
            <Counter />
            <Toolbar
              onPlayMovie={() => alert('Playing!')}
              onUploadImage={() => alert('Uploading!')}
            />
            <Profile />
            <ShoppingList />
          </div>
        )
      }

      {/* 组件 共享数据并一起更新 */}
      {/* props: 将 App 中的点击事件处理函数以及 state 一同向下传递到 每个 MyButton 中。你可以使用 JSX 的大括号向 MyButton 传递信息 */}
      {
        false && (
          <div>
            <h1>共同更新的计数器</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
          </div>
        )
      }

      <div>
        {
          false && <Game />
        }
      </div>

      <div>
        <FilterableProductTable />
      </div>
    </div>



  )
}

export default App
