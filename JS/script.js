// Chamada dos elementos HTML
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const openModalBtn = document.querySelector('#openModalBtn');
const form = document.querySelector('form');
const taskArea = document.querySelector('.taskArea');

// Chamada da lista de tarefas no localStorage
let listTasks = localStorage.getItem('tasks');

// Contador
let counter = 0;

// Função para abrir o modal
const openModal = () => {
    modal.classList.remove('closed');
}

// Função para fechar o modal
const closeModal = () => {
    form.reset();
    modal.classList.add('closed');
}

// Função para mostrar a lista de tarefas
const showList = () => {
    taskArea.innerHTML = ' ';
    if (listTasks.length >= 1) {
        listTasks.map(item => 
            taskArea.innerHTML += `<li id="${item.id}" class="task ${item.done}">
            <h3>${item.taskTitle}</h3>
            <p>${item.taskDesc}
            </p>
            <div class="buttons">
                <button class="mdi mdi-check" id="doneBtn" onclick="setCheck(${item.id})"></button>
                <button class="mdi mdi-trash-can" id="deleteBtn" onclick="deleteTask(${item.id})"></button>
            </div>
        </li>`
            )
    }
}

// Função para deletar uma tarefa
const deleteTask = (idTask) => {
    const toRemove = listTasks.findIndex(index => index.id === idTask)
    console.log(toRemove);
    listTasks.splice(toRemove, 1);

    saveList();
    showList();

}

// Função para marcar uma tarefa como concluída
const setCheck = (idTask) => {
    const toCheck = listTasks.findIndex(index => index.id === idTask)
    listTasks[toCheck].done = 'done'

    saveList();
    showList();
}

// Verificação para chamar o array de tarefas no localStorage sem dar erros
if (listTasks) {
    listTasks = JSON.parse(listTasks);
} else {
    listTasks = [];
}

// Função que cria uma nova tarefa e envia para o localStorage
const createNewTask = (e) => {
    e.preventDefault();

    if (e.target[0].value === '' || e.target[1].value === '') {
       alert('por favor, preencha os campos corretamente!');
    } else {
        let newTask = new Object();
        newTask.id = listTasks.length;
        newTask.taskTitle = this.taskTitle.value;
        newTask.taskDesc = this.taskDesc.value;
        newTask.done = '';
        listTasks.push(newTask);
        
        saveList();
        showList();
        closeModal();
    }
}

// Função para salvar a lista no localStorage
const saveList = (list) => {
    localStorage.setItem('tasks', JSON.stringify(listTasks));

}

// chamada das funções
form.addEventListener("submit", createNewTask);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);





