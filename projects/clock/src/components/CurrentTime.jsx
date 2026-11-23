


function ClockSlogan(){
    let time=new Date().toLocaleTimeString();
    let date=new Date().toLocaleDateString();

  return (
    <>
    
    <h2>Current time : {time}</h2>
    <h3>Current date : {date}</h3>
    
  </>
  )
  
}
export default ClockSlogan