let today  = new Date();
const options = { weekday: 'long', day:'numeric',  month: 'long', }
// console.log(today.toLocaleDateString('en', options))

let todos = []
function checkNoTodo(){
    if(todos.length == 0){
        let noTodo = document.getElementById('no-todo');
        noTodo.classList.remove('d-none')
        noTodo.classList.add('no-todo')
    }
    else{
        let noTodo = document.getElementById('no-todo');
        noTodo.classList.remove('no-todo')
        noTodo.classList.add('d-none')
    }
}

function makeInputsBlank(){
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
}

function renderTodos(){
    let todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = ''
    todos.map((todo)=>{
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-done');

        let contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        let title = document.createElement('p');
        title.classList.add('todo-title');
        let desc = document.createElement('p');
        desc.classList.add('desc');
        let dueDate = document.createElement('p');
        dueDate.classList.add('due');

        // adding values
        title.innerText = todo.title;
        desc.innerText = todo.desc;
        let date = new Date(todo.dueDate);
        let fDate = date.toLocaleDateString('en', options);
        let fTime = date.toLocaleTimeString('en-US')
        dueDate.innerText = fTime + " " + fDate;


        todoContainer.appendChild(todoDiv)
        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(contentDiv);
        contentDiv.appendChild(title);
        contentDiv.appendChild(desc);
        contentDiv.appendChild(dueDate);

    })
}
function sortTodos(){
    let sorted = todos.sort((a,b)=>{
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);

        // compare
        if(dateA < dateB){
            return -1;
        }
        else if(dateA > dateB){
            return 1;
        }
        else{
            return 0
        }

        
    })
    console.log("sorted: ", sorted)
}

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
    checkNoTodo();
    makeInputsBlank();
    sortTodos();
    renderTodos();

}

