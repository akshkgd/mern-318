// let today  = new Date();
// const options = {day:'numeric',  month: 'long', }
// console.log(today.toLocaleDateString('en', options))

let todos = []


function addTodo(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let dueDate = document.getElementById('dueDate').value;
    let tempTodoObject = {
        title: title,
        desc: desc,
        dueDate: dueDate,
    }

    todos.push(tempTodoObject);
    console.log(todos)
}