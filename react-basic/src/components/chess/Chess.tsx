import { useState } from 'react'
import '../../css/chess.css'

// 联合类型：只能是 X、O 或 null
type SquareValue = 'X' | 'O' | null

// 棋盘数据：由 9 个格子的值组成
type Board = SquareValue[]

// 单个格子组件的 Props
interface SquareProps {
  value: SquareValue
  onSquareClick: () => void
}

// 棋盘组件的 Props
interface GameBoardProps {
  isNextPlayerX: boolean
  squares: Board
  onPlay: (nextBoard: Board) => void
}

// 方格
function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}


/**
 * 棋盘组件
 */
function GameBoard({
  isNextPlayerX,
  squares,
  onPlay,
}: GameBoardProps) {

  /**
   * 点击棋盘格子
   */
  function handleSquareClick(index: number) {
    // 已经落子，或者已经有人获胜，则不允许继续
    if (squares[index] !== null || calculateWinner(squares)) {
      return
    }

    // 创建新的棋盘，不修改原数组
    const nextBoard = [...squares]

    nextBoard[index] = isNextPlayerX ? 'X' : 'O'

    onPlay(nextBoard)
  }

  const winner = calculateWinner(squares)

  // 判断是否平局
  const isDraw = !winner && squares.every(value => value !== null)

  let status: string

  if (winner) {
    status = `Winner: ${winner}`
  } else if (isDraw) {
    status = 'Draw!'
  } else {
    status = `Next player: ${isNextPlayerX ? 'X' : 'O'}`
  }

  return (
    <div>
      <div className="status">{status}</div>

      <div className="board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * 游戏主组件
 */
function Game() {
  // 每一步的棋盘历史
  const [history, setHistory] = useState<Board[]>([
    Array(9).fill(null),
  ])

  // 当前所在的历史步骤
  const [currentMove, setCurrentMove] = useState(0)

  // 偶数步 X，奇数步 O
  const isNextPlayerX = currentMove % 2 === 0

  // 当前棋盘
  const currentBoard = history[currentMove]

  /**
   * 下棋
   */
  function handlePlay(nextBoard: Board) {
    // 保留当前步骤之前的历史，删除未来历史
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextBoard,
    ]

    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  /**
   * 时间旅行：回到指定步骤
   */
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  /**
   * 历史记录列表
   */
  const moves = history.map((_, move) => {
    const description =
      move === 0
        ? 'Go to game start'
        : `Go to move #${move}`

    const isCurrentMove = move === currentMove

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          disabled={isCurrentMove}
        >
          {isCurrentMove ? `▶ ${description}` : description}
        </button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <GameBoard
          isNextPlayerX={isNextPlayerX}
          squares={currentBoard}
          onPlay={handlePlay}
        />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}


/**
 * 判断获胜者
 * 返回 X / O / null
 */
function calculateWinner(squares: Board): SquareValue {
  const lines: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]
    }
  }

  return null
}
export default Game
