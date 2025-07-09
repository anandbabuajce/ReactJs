import './App.css';
import  React,{useState} from 'react';
import Counter from './Counter'
import './Progressbar.css'
function App() {



  const [count,setcount] =useState(0);
  const [state,setstate] =useState(false);
  function addcount() {
    setcount(count+1);
  }
  function subcount() {
    setcount(count-1)
  }
  return (  
    <div className="increment" style={{textAlign:"center"}}>
      <br></br>
      <button onClick={addcount}>Increment</button>
      <hr></hr>
      <br></br>
      <button onClick={subcount}>Decrement</button>
      <hr></hr>
      <h1>COUNTER:{count}</h1>
      <br></br>
      <hr></hr>
      <button onClick={() =>setstate(!state)}>SHOW</button>
      { state ? <Counter/> :null}
      <br></br>
      <hr></hr>
      <ProgressBar/>
      </div>

    
  );
}

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);
  const handleChange = (e) => {
    const value = e.target.value
    setPercentage(value);
  };
 
 
 
  return (
    <div className="Progressbarcontainer">
      <h2>Progress Bar</h2>
      <div className="progressbartrack">
        <div className={`progressbarfill
          ${percentage >= 100 ? 'completed' : ''}`} style={{ width: `${percentage}%` }}>
 
        </div>
 
 
      </div>
      <div className="inputcontainer">
        <input type="number" min="0" max="100" value={percentage}
          onChange={handleChange} className="percentageinput" />
 
      </div>
    </div >
  )
 
 
}
 


export default App;

 