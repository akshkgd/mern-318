let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a)

// function sqr(num){
//     return num * num;
// }

// let result = a.map(sqr);

let result = a.map((num)=>{
    return num * num
})



console.log(result)