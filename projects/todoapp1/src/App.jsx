import AppName from './components/AppName.jsx'
import AddToDo from './components/AddToDo.jsx'
import ToDoItem from './pages/ToDoItem.jsx'

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />

      <ToDoItem></ToDoItem>
    </center>
  )
}

export default App
