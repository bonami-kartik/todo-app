'use strict'

const inputTask = document.querySelector('.task-input')
const addBtn = document.querySelector('.add-btn');
const tasksContainer = document.querySelector('.tasks-container')
const tasksLists = document.querySelector('.tasks-list')
const clearBtnEle = document.querySelector('.clearBtn')
let tasks = [], html = '';
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

function clearBtnRender() {
    clearBtn = `<button type="button" onclick="clearTasks()" class="btn btn-primary clear-btn">CLEAR TASKS</button>`
    clearBtnDiv.insertAdjacentHTML('beforeend', clearBtn);
    clearBtnEle.insertAdjacentHTML('beforeend', clearBtn)
    console.log(clearBtnDiv.innerHTML)
}

function clearBtnRemove() {
    clearBtn = ''
    clearBtnEle.innerHTML = ''
    console.log('clearbtn removed')
}

console.dir(clearBtnDiv)

function giveEditField() {
    let editInput = '';
    editInput = `<input type="text" />`
}

// function changeTask() {
//     let newTask = prompt('Make a Edit');
//     tasks.splice(i, 1, newTask)
//     // createTasks();
// }

function tasksToDoContainer() {
    let html = '';
    html = `<h3>Tasks</h3>
            <div class="input-group mb-3 tasks-list">
                <input type="text" class="form-control task-input" placeholder="Filter Tasks" aria-label="Username" aria-describedby="basic-addon1" onchange="filterTasks(e)">
            </div>`
    
}
function editTask() {
    tasksLists.children[0].children[0].addEventListener('click', function(e) {
        e.path[1].contentEditable = true;
        // e.path[1].style.backgroundColor = '#c5c5c5'

        console.log(e)

        e.path[4].onclick = console.log('body clicked')

        // window.addEventListener('click', function (e) {
        //     e.path[1].contentEditable = false;
        //     e.path[1].style.backgroundColor = '#fff'
        // })
    })
}

function createTasks(arr) {
    if (arr == []) console.log('chal ja bhai');
    if (tasks.length == 1) {
        clearBtnRender();
    }
    for (let i = 0; i < arr.length; i++)  
    html = `<ul class="list-group" data-key=${i+1}>
                <li class="list-group-item" data-key="${i+1}">
                    ${arr[i]}
                    <i class="fa-solid fa-pen-to-square edit-task" onclick="editTask()"></i>
                </li>
            </ul>`
    // listEleDiv.insertAdjacentHTML('beforeend', html);
    tasksLists.innerHTML += html;
    // tasks.length != 0 ? tasksLists.insertAdjacentHTML('beforeend', html) : ''
    console.dir(tasksLists)
}

// function editTask(e) {
//     e.target.contentEditable = true;
//     e.target.backgroundColor = '#bbbbbb'
//     console.log(e)
// }

function clearTasks() {
    tasks = [];
    html = '';
    tasksLists.innerHTML = html;
    clearBtnRemove();
    // createTasks(tasks);
    console.log('Cleared')
}

function filterTasks(e) {
    const filterTasksArr = tasks.filter((e) => {
        return e.target.value
    })
    // createTasks(filterTasksArr)
    console.log(e.target.value)
}
