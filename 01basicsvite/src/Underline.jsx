
import Underlinelist from './Underlinelist'

const Underline = () => {
 let todoList = ["wakeup soon", "walking", "breakfast"]
  return (
    <>
    <h1>Click to Underline</h1>
    {
      todoList.map((items)=>{

       return <Underlinelist acti = {items}/>
      })
    }
  
    </>
  )
}

export default Underline