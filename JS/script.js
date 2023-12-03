const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const openModalBtn = document.querySelector('#openModalBtn');
const form = document.querySelector('form');
const taskArea = document.querySelector('.taskArea');
let listTasks = localStorage.getItem('tasks');
let counter = 0;


const openModal = () => {
    modal.classList.remove('closed');
}

const closeModal = () => {
    form.reset();
    modal.classList.add('closed');
}

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

const deleteTask = (idTask) => {
    // listTasks[idTask - 1].done = 'done'
    const toRemove = listTasks.findIndex(index => index.id === idTask)
    console.log(toRemove);
    listTasks.splice(toRemove, 1);

    // localStorage.setItem('tasks', JSON.stringify(listTasks));
    saveList();
    showList();

}

const setCheck = (idTask) => {
    const toCheck = listTasks.findIndex(index => index.id === idTask)
    listTasks[toCheck].done = 'done'


    // localStorage.setItem('tasks', JSON.stringify(listTasks));
    saveList();
    showList();

}

if (listTasks) {
    listTasks = JSON.parse(listTasks);
} else {
    listTasks = [];
}



const createNewTask = (e) => {
    e.preventDefault();

    if (e.target[0].value === '' || e.target[1].value === '') {
       alert('por favor, preencha os campos corretamente!');
    } else {
        let newTask = new Object();
        newTask.id = ++counter;
        newTask.taskTitle = this.taskTitle.value;
        newTask.taskDesc = this.taskDesc.value;
        newTask.done = '';
        listTasks.push(newTask);
        

        // localStorage.setItem('tasks', JSON.stringify(listTasks));
        saveList();
        showList();
        closeModal();
    }
}

const saveList = (list) => {
    localStorage.setItem('tasks', JSON.stringify(listTasks));

}

form.addEventListener("submit", createNewTask);

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);





