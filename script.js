let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = [
    'Fazer o café',
    'Estudar JS',
    'Estudar inglês'
];

function renderTodos(){

    listElement.innerHTML = '';
    for(todo of todos){
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodos(){

    let todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodos;
