import { color } from '../../data/demo'
import '../../css/index.css'

const style = {
  color: 'blue',
  fontSize: '20px'
}

function ColorDemo() {
  if (color === 0) {
    return <div style={{ color: 'red' }}>red</div>
  }

  if (color === 1) {
    return <div style={style}>blue</div>
  }

  return <span className='foo'>this is class foo</span>
}

export default ColorDemo
