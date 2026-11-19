import styles from './Student.module.css'
import Button from '../Button/Button';
import { useState } from 'react';
function Student({id,name,age,isStudent}){

    const [count,setCount]=useState(0)

    function handleClick(){
        console.log("msg")
        setCount(count=>count+1)
    }

    return(
            <div className={styles.student}>
                {/* <h2>Name : {props.name}</h2>
                 <h2> Age : {props.age}</h2>
                 <h2> Student : {props.isStudent ?"Yes":"No"}</h2> */}

                 <h2>Name : {name}</h2>
                 <h2> Age : {age}</h2>
                 <h2> Student : {isStudent ?"Yes":"No"}</h2>
                 
                 <Button label={"Like"} handleClick={handleClick}/>

                 <span>{count}</span>

            </div>
    );
}

export default Student