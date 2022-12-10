// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('garlic');

function add(num1, num2){
    // return (num1 + num2);
    // return can return anything that you want
}

// let a = 20;
// let b = 3;

// let sum = add(a, b);

// console.log("the sum is: ", sum);

// var a = 'ashish';
// let b = 1;
// const c = 2;

// function sqr(){
//     let d = 4;
//     const  e = 5;
//     var f = 6;
// }
// sqr()

// console.log(f)

// function to calculate the tax
// salary less than 3lpa no tax deductions
// salary is less than  that 6lpa  tax deductions => 10% over 3lakkhs
// salary is greater than 6lpa than tax 20% on excess

function taxCalculation(salary, name){
    console.log('Tax deductions for ', name)
    if(salary <= 300000){
        console.log('No tax deductions🥳')
    }
    // less than 6lpa
    else if(salary <= 600000){
        let deductions = (salary - 300000) * 0.1;
        console.log('comes under 10% slab')
        console.log(deductions)
    }
    else if(salary > 600000){
        console.log('comes under 20% slab')
        let deductions1 = 30000;
        let deductions2 = (salary-600000) * 0.2;
        let totalDeductions = deductions1 + deductions2;
        console.log(totalDeductions)
    }

}

// taxCalculation(700000, 'ashish');
// taxCalculation(400000, 'harish');
// taxCalculation(1200000, 'yash');
// taxCalculation(1243943, 'yash');


function functionName(){
    return (damsldalsd)
}

// arrow funcitons => es6

functionName = () =>{
    // ...
}

cube =(n)=> n*n*n;


let result = cube(6)
console.log(result)