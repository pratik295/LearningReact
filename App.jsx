import TodoItem from "./components/TodoItem"
import Todoheading from "./components/Todoheading"
import TodoDelete from "./components/TodoDelete"
import TodoDelete2 from "./components/TodoDelete2"
import './App.css'


function App() {
  return (
    <center className="Todo-container">
      <Todoheading></Todoheading>
      <TodoItem></TodoItem>

      <div className="item-container">
        <TodoDelete></TodoDelete>
        <TodoDelete2></TodoDelete2>

      </div>
    </center>
  )
}
export default App