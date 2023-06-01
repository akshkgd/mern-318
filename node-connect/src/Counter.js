import React from "react";
import { useSelector, useDispatch} from "react-redux";
function Counter(){
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch();
    const increment = () =>{
        dispatch({type: 'INCREMENT'})
    }
    const decrement = () =>{
        dispatch({type: 'DECREMENT'})
    }
    return(
        <div>
            <h1>Redux counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}

export default Counter;