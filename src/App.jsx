import './App.css';
import { useState } from 'react';
function App() {

  const [count,setCount] = useState(0)

  return (
    <div className="App">
       <h1>Count:</h1>
       <p id='count'>{count}</p>
       <button onClick={()=> setCount(count+1)}>+</button>
       <button onClick={()=> {
                
                if (count>0) {
                  setCount(count-1)
                }else{
                  alert("you cant decrement the count even more")
                }
                  
        }}>-</button>
       <button onClick={()=> setCount(0)}>reset</button>
    </div>
  );
}

export default App;
