// promises

// console.log('task 1');
// setTimeout(()=>{
//     console.log('task 2');
// }, 3000)
// console.log('task 3');
// console.log('task 4');


// let promise = new Promise((resolve, reject)=>{

// })



function sendEmail(){
    console.log('email send to the user!')
}
function register(){
    console.log('registration proccessed!!')
    let registrationSuccessful = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         console.log('registration is successful!');
         resolve();
        },2000)
}).then(()=>{
    sendEmail()
})
}


