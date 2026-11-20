import { useState } from 'react'
import '../../css/chess.css'


function Chess() {

  const [square, setSquare] = useState(Array(9).fill(null))
  return (
    <div>
      <div className='board-row' >
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row' >
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row' >
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Chess

function Square() {
  const [value, setValue] = useState(null)
  function handleClink() {
    setValue('X')
  }
  return (
    <button className="square" onClick={handleClink}>{value}</button>
  )
}
