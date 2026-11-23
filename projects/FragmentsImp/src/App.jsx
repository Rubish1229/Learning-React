import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let foodItems = ["Rice", "Vegetables", "Pizza", "Momo", "Dal Roti"]

  return (
    <>
      <div className="container mt-4 p-3">
        <h1>Healthy Foods</h1>

        <ul className="list-group">
          {foodItems.map((item, index) => {
            return (
              <li
                className="list-group-item"
                key={index}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}


export default App