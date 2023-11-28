const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#close');
const openModal = document.querySelector('.openModal');
const taskForm = document.querySelector('.taskForm');
const tasksArea = document.querySelector('.tasksArea');

 let taskCount = 0

const modalOpen = () => {
    modal.style.display = 'block'
}

const modalClose = () => {
    modal.style.display = 'none'
}

const createTask = (e) => {
    e.preventDefault();
    

    if (e.target[0].value === '' || e.target[1].value === '') {
        alert('Por favor preencha os campo corretemente')
    } else {
        openModal.remove()
        ++taskCount
        tasksArea.innerHTML += `<div class="postIt" id=${taskCount}>
        <div class="buttons">
            <button class="bi bi-check-circle" onclick="checkTask(${taskCount})"></button>
            <button class="bi bi-eraser-fill" onclick="removeTask(${taskCount})"></button>
        </div>
        
        <h2>${e.target[0].value}</h2>
        <p>${e.target[1].value}</p>
    </div>`
        modalClose()
        e.target[0].value = ''
        e.target[1].value = ''
        tasksArea.appendChild(openModal)
    }
}

const removeTask = (e) => {
    var task = document.getElementById(e)
    task.remove()
}

const checkTask = (e) => {
    var task = document.getElementById(e)
    task.classList.toggle('taskReady')
}

closeModal.addEventListener('click', modalClose);
openModal.addEventListener('click', modalOpen);
taskForm.addEventListener('submit', createTask);

