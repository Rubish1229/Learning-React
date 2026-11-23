function TodoCard({ item }) {
return (
     <div className="row p-4 border mb-2 rounded">
          <div className="col">{item.toDoName}</div>
          <div className="col">{item.toDoDate}</div>
          <div className="col">
            <button type="button" className="btn-outline theme-danger">
              Delete
            </button>
          </div>
        </div>
)
}
export default TodoCard