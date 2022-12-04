let shoppingList = ['milk', 'bread', 'butter']
// console.log(shoppingList)

// shoppingList[3] = 'rice';

// to add the value in the end
// shoppingList.push('jam')
// shoppingList.push('fruits')

// to remove the values from the end
// shoppingList.pop();
// shoppingList.pop();

// to delete the values from any sprecific index
// shoppingList.splice(0,2)

// splice(index value, items we want to delete, add new items)
shoppingList.splice(0, 1, 'other item', 'one more item')

// console.log(shoppingList)

// let user = ['ashish', 'ashish@gmail.com', '32938923829', 'allahabad']

let user = {
    name: 'ashish',
    email: 'ashish@gmail.com',
    address: 'allahabad'
}
// console.log(user);
// add a value to object
user.mobile = '9876543210'
// delete a value from object
delete user.address;

// console.log(user)

// spread operator
// let numbers = [1,2,3,4,5]
// let totalNumbers = [...numbers, 6,7,8,9]

// console.log(totalNumbers)


// array of objects
let users = [
    {name: 'ashish', email: 'ashish@gmail.com', course: 'mern'},
    {name: 'bhavna', email: 'bhavna@gmail.com', course: 'mern'},
    {name: 'kenil', email: 'kenil@gmail.com', course: 'react js'},
    {name: 'nayan', email: 'nayan@gmail.com', course: 'mern'},
    {name: 'balaji', email: 'balaji@gmail.com', course: 'mern'},
    {name: 'rohit', email: 'rohit@gmail.com', course: 'react js'},
    {name: 'siddesh', email: 'siddesh@gmail.com', course: 'react js'}
]

let luckyUser = Math.floor(Math.random()*users.length) ;
// console.log(users.length)

console.log(users[luckyUser].name)