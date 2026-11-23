function userGreetings(props){
    
        
            if(props.isLoggedIn){
                return <h2>Welcome {props.username}</h2>
            }
            else{
                return <h2>Please login first!</h2>
            }
        
     
}


export default userGreetings