const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const openModalBtn = document.querySelector('#openModalBtn');
const form = document.querySelector('form');
const taskArea = document.querySelector('.taskArea');

let counter = 0

const tarefas = [];

const openModal = () => {
    modal.classList.remove('closed');
}

const closeModal = () => {
    modal.classList.add('closed');
}

const deleteTask = (id) => {
    const task = document.getElementById(id);
    task.remove();
}

const setCheck = (id) => {
    const task = document.getElementById(id);
    task.classList.add('done');
}

const createNewTask = (e) => {
    e.preventDefault();

    if (e.target[0].value === '' || e.target[1].value === '') {
       alert('por favor, preencha os campos corretamente!');
    } else {
        ++counter
        const task = `<li id="${counter}" class="task">
        <h3>${e.target[0].value}</h3>
        <p>${e.target[1].value}
        </p>
        <div class="buttons">
            <button class="mdi mdi-check" id="doneBtn" onclick="setCheck(${counter})"></button>
            <button class="mdi mdi-trash-can" id="deleteBtn" onclick="deleteTask(${counter})"></button>
        </div>
    </li>`
    
        taskArea.innerHTML += task;
        
        e.target[0].value = '';
        e.target[1].value = '';
        closeModal();
    }
}


form.addEventListener("submit", createNewTask)

openModalBtn.addEventListener("click", openModal)

closeModalBtn.addEventListener("click", closeModal)





