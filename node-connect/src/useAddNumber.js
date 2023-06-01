import { useState } from "react";
export function useAddNumber(){
    const [result, setResult] = useState(null);
    
    const addNumbers = (num1, num2) =>{
        const sum = num1 + num2;
        setResult(sum)
    }
    return {result, addNumbers}
}
