import { color } from '../data/demo'

function ColorDemo() {
  if (color === 0) {
    return <div style={{ color: 'red' }}>red</div>
  }

  if (color === 1) {
    return <div style={{ color: 'blue' }}>blue</div>
  }

  return <div style={{ color: 'pink' }}>pink</div>
}

export default ColorDemo
