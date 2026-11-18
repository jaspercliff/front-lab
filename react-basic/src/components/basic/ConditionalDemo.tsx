import { isLogin, isLoading } from '../../data/demo'

function ConditionalDemo() {
  return (
    <div>
      <h3>条件渲染</h3>

      {/* && 条件渲染 */}
      {isLogin && <span>this is span</span>}

      {/* 三元表达式 */}
      {isLoading
        ? <span>loading</span>
        : <span>complete</span>
      }
    </div>
  )
}

export default ConditionalDemo
