import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button.jsx"
import Student from "./propsexample/Student.jsx"



function App() {
const students= [{
   id:1,
   name: "Rubish",
   age: 26,
   isStudent: true
},
{
   id:2,
   name: "Salim",
   age: 36,
   isStudent: true
}]
 return <>
    <Header></Header>
    <Food></Food>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>

    <hr></hr>

    <Button></Button>

    <hr></hr>
    
    {/* <Student name={"Ram Bahadur"} age={30} isStudent={false}></Student> */}
    
    {students.map(s => 
      <Student 
      key={s.id}
      name={s.name}
      age={s.age}
      isStudent={s.isStudent}>
         
      </Student>
      
    )
    

    }
    <Button></Button>
    <Footer></Footer>
 </>
}

export default App
