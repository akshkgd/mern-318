import './App.css';
import { useState } from 'react';
let counter = 0;

function App() {
  let [counter, setCounter] = useState(0)
  let [name, updateName] = useState('');

  // order food hooks
  let [orderStatus, setOrderStatus] = useState(0)

  function clickHandler(){
    setCounter(counter + 1)
    updateName('ashish');
    console.log(counter)
  }

  function OrderFoodHandler(){
    setOrderStatus(1);
    console.log(orderStatus)
  }
  return (
    // <div className="App">
    //   <h1>{counter} times clicked by {name}</h1>
    //   <button className='btn' onClick={clickHandler}>Example of react Hook</button>

    // </div>
    <div className='card'>
        <img src='https://source.unsplash.com/1600x800/?burger'/>
        <div className='flex'>
          <h3>Veg Supreme Burger</h3>
          <p className={orderStatus == 0 ? "d-none" : "order-success"}>Order is Successful</p>
        </div>
        <p>A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll.  </p>
        <button className={orderStatus == 0 ? "btn" : "d-none"} onClick={OrderFoodHandler}>Order Now</button>
    </div> 
  );
}

export default App;
