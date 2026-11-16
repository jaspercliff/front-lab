function getName() {
  return 'jasper'
}

function JsExpressionDemo() {
  return (
    <div>
      <h3>JavaScript 表达式</h3>

      {/* 字符串 */}
      {'this is message'}

      {/* 变量 */}
      <p>{100}</p>

      {/* 函数调用 */}
      <p>{getName()}</p>

      {/* 方法调用 */}
      <p>{new Date().getDate()}</p>

      {/* JavaScript 对象 */}
      <div style={{ color: 'red' }}>
        this is div
      </div>
    </div>
  )
}

export default JsExpressionDemo
