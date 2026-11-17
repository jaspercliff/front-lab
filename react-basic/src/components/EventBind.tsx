import type { MouseEvent } from 'react' //react 内部事件
const handleClick = (name: string, e: MouseEvent<HTMLButtonElement>,) => {
  console.log("click button", name, e)
}

function EventBind() {
  return (<button onClick={(e) =>
    handleClick('jasper', e)}>click </button>)
}

export default EventBind
