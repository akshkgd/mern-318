import logo from './logo.svg';
import React, { useEffect } from 'react';
import { useAddNumber } from './useAddNumber';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store'
import './App.css';

function App() {
  const {result, addNumbers} = useAddNumber();
  function additionHandler(){
    addNumbers(21,31);
  }
  return(
    <div>
    {/* <h1>Custom hook to add two numbers</h1>
    <button onClick={additionHandler}>Add Numbers</button>
    <p>Sum: {result}</p> */}
<Provider store={store}>
<Counter/>

</Provider>


  </div>
  )
}

export default App;




// connection test code
// useEffect(() => {
//   fetchData();
// }, []);
// const fetchData = async () => {
//   try {
//     const response = await fetch('http://localhost:8000/api-callbacks'); // Replace with your API endpoint
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// return (
//   <div className="App">
//     <form action='/test' method='post'>
//       <h1>React Connection test with backend</h1>
//       <button type="submit">Submit Form</button>
//     </form>
//   </div>
// );