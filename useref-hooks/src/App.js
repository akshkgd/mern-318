import './App.css';
import {useState, useRef} from 'react';
function App() {
  let amountInput = useRef()
  let personsInput = useRef()

  let [name, setName] = useState('');
  let [bill, setBill] = useState('🍟');
  let [status, setStatus] = useState(0)
  function welcomeHandler(event){
    event.preventDefault();
    // setName(amountInput.current.value)
    // console.log(document.getElementById('userName').value)
    let amount = amountInput.current.value;
    let persons = personsInput.current.value;
    let bill = amount / persons;
    setBill(bill);
    setStatus(1)
  }
  function resetHandler(event){
    event.preventDefault();
    setBill('🍟');
    setStatus(0)
  }
  return (
    <div className="App">
      {/* <h1>Welcome to the hooks class {name}</h1> */}
      <form >
        <h2>{bill}</h2>
        <h1>Split your bills</h1>
        <input placeholder='Enter the amount' type='text' ref={amountInput}  />
        <input placeholder='Enter the persons' type='text' ref={personsInput}  />
        {
          status == 0 ?
            <button type='submit' className='btn' onClick={welcomeHandler}>Split the Bill</button>
          : 
          <button type='submit' className='btn' onClick={resetHandler}>Reset</button>
          
        }
      </form>

    </div>
  );
}

export default App;
