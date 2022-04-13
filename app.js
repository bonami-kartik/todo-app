'use strict'

const inputTask = document.querySelector('.task-input')
const addBtn = document.querySelector('.add-btn');
const tasksContainer = document.querySelector('.tasks-container')
let tasks = [];
let clearBtn;
let clearBtnDiv = document.createElement('div');
let listEleDiv = document.createElement('div');

console.dir(inputTask.value)
console.log(addBtn);

addBtn.addEventListener('click', function () {
    console.log(inputTask.value)
    tasks.push(inputTask.value);
    createTasks(tasks)
    inputTask.value = '';
})


clearBtnDiv.addEventListener('click', function () {
    clearTasks();
    console.log('Cleared')
})

function clearBtnRender() {
    clearBtn = `<button type="button" class="btn btn-primary clear-btn">CLEAR TASKS</button>`
    clearBtnDiv.innerHTML = clearBtn;
    tasksContainer.insertAdjacentHTML('beforeend', clearBtn)
    console.log(clearBtnDiv.innerHTML)

}

console.log(clearBtnDiv.innerHTML)

function createTasks(arr) {
    let html = '';
    if (tasks.length == 1) {
        clearBtnRender();
    }
    for (let i = 0; i < arr.length; i++)  
    html = `<ul class="list-group">
                <li class="list-group-item">${arr[i]}</li>
            </ul>`
    
    listEleDiv.innerHTML = html;
    tasks.length != 0 ? tasksContainer.insertAdjacentHTML('beforeend', html) : ''
}

function clearTasks() {
    listEleDiv.textContent = ''
    console.log('Cleared')
}