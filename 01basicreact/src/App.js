import logo from "./logo.svg";
import "./App.css";

function App() {
  let arr = ["one", "two", "three"];

  return (
    <div className="App">
      {
        arr.map((items)=>{

          return  <h1>{items}</h1>
        })
      }
    </div>
  );
}

export default App;
