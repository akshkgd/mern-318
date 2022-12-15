let users = [
    {firstName: 'ashish', lastName: 'shukla', age: 25, job: 'teacher'}, 
    {firstName: 'yash', lastName: 'goel', age: 16}, 
    {firstName: 'himanshu', lastName: 'srivastava', age: 24}, 
    {firstName: 'arpit', lastName: 'khare', age: 21}, 
    {firstName: 'bhavna', lastName: 'shukla', age: 14, job: 'teacher'}, 
    {firstName: 'vipra', lastName: 'pardikar', age: 20}, 
    {firstName: 'ashish', lastName: 'pathak', age: 28, job: 'full stack developer'}, 
];

// let usersName = users.map((user)=>{
//     return user.firstName + " age is " + user.age;
// })

// console.log(usersName)

// let filters = users.filter((user)=>{
//         if(user.age > 18 && user.job == 'teacher'){
//             return user;
//         }
// }).map((user)=>{
//     return user.firstName;
// })
// console.log(filters)


// let user = users.filter((user)=>{
//    return user.firstName == 'ashish'
// }).map((user)=>{
//     return user.firstName;
// })

let user = users.find((user)=>{
    return user.firstName == 'ashish'
})

console.log(user.job)