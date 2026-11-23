import TodoCard from '../components/TodoCard.jsx'
function ToDoItem() {
  const todoItems = [
    {
      id: 1,
      toDoName: 'Buy Milk',
      toDoDate: '6/9/2019',
    },

    {
      id: 2,
      toDoName: 'Buy Bread',
      toDoDate: '6/10/2019',
    },
  ]

  return (
    <div class="container text-center">
      {todoItems.map((item) => (
       <TodoCard item={item} key={item.id}></TodoCard>
      ))}
    </div>
  )
}

export default ToDoItem
