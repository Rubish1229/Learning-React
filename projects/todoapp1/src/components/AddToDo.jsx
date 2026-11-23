function AddToDo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <input type="text" placeholder="Enter your task"></input>
        </div>
        <div class="col">
          <input type="date" placeholder="Enter due date"></input>
        </div>
        <div class="col">
          <button type="button" className="btn-solid theme-success">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddToDo
