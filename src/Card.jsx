import "./Card.css";
import profilePic from "./assets/avatar.webp"

function Card(){


    return (
        <>

        <div className="card">
            <img className="card-image" src={profilePic}/>
            <h2 className="card-title">Learning React</h2>
            <p className="card-text">I am learning react through online</p>
            
        </div>
        
        </>

        
    );
}


export default Card