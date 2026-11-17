import ListDemo from './components/ListDemo'
import ConditionalDemo from './components/ConditionalDemo'
import JsExpressionDemo from './components/jsExpressionDemo'
import ColorDemo from './components/ColorDemo'
import Toolbar from './components/Toolbar'
import Counter from './components/Counter'
import EventBind from './components/EventBind'



function App() {
  return (
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
    </div>

  )
}

export default App
