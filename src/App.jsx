import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button.jsx"
import Student from "./propsexample/Student.jsx"
import { useState } from "react"
import UserGreetings from "./propsexample/UserGreetings.jsx"



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

const [totalLikes,setTotalLikes]=useState(0)

function handleTotalLikes(){
    setTotalLikes(totalLikes=>totalLikes+1)
}
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
    
    <span>Total Likes : {totalLikes}</span>

    {students.map(s => 
      <Student 
      key={s.id}
      name={s.name}
      age={s.age}
      isStudent={s.isStudent}
      onLike={handleTotalLikes}>
         
      </Student>
    )
    }
    <Button></Button>


    <hr></hr>

    <UserGreetings isLoggedIn={true} username="Rubish"></UserGreetings>
    <Footer></Footer>
 </>
}

export default App
