import { createStore } from "redux";

// initial state
const initialState = {
    count: 0
}
// reducer function
const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return{
                ...state,
                count : state.count +1    
            };
            case 'DECREMENT':
                return {
                    ...state,
                count : state.count -1
                }
                default :
                return state
    }
};

const store = createStore(reducer);
export default store;