"use strict";

const inputTask = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const tasksContainer = document.querySelector(".tasks-container");
const tasksLists = document.querySelector(".list-group");
const clearBtnEle = document.querySelector(".clearBtn");
let tasks = ["sadasd", "asdsad", "sadasd"];
let html = "";
let clearBtn;
let clearBtnDiv = document.createElement("div");
let listEleDiv = document.createElement("div");

console.dir(inputTask.value);
console.log(addBtn);

addBtn.addEventListener("click", function () {
  console.log(inputTask.value);
  tasks.push(inputTask.value);
  createTasks(inputTask.value);
  inputTask.value = "";
});

window.addEventListener("load", (event) => {
  //   createTasks(tasks);
  let firstlist = [];
  tasks.forEach((ele, i) => {
    firstlist += `<li class="list-group-item" data-key="${i + 1}">
    <input id="${i + 1}" value="${ele}" onchange="editTaskArr(event, ${
      i + 1
    })" type="text" disabled style="background-color: #fff; border: none; width: 100%"/>
        <i class="fa-solid fa-pen-to-square edit-task" onclick="editTask(event,${
          i + 1
        })"></i>
    </li>`;
  });

  if (tasks.length > 0 && !clearBtnEle.hasChildNodes()) {
    clearBtnRender();
  }

  tasksLists.innerHTML = firstlist;
});

function clearBtnRender() {
  clearBtn = `<button type="button" onclick="clearTasks()" class="btn btn-primary clear-btn">CLEAR TASKS</button>`;
  clearBtnDiv.insertAdjacentHTML("beforeend", clearBtn);
  clearBtnEle.insertAdjacentHTML("beforeend", clearBtn);
  console.log(clearBtnDiv.innerHTML);
}

function clearBtnRemove() {
  clearBtn = "";
  clearBtnEle.innerHTML = "";
}

function tasksToDoContainer() {
  let html = "";
  html = `<h3>Tasks</h3>
            <div class="input-group mb-3 tasks-list">
                <input type="text" class="form-control task-input" placeholder="Filter Tasks" aria-label="Username" aria-describedby="basic-addon1" onchange="filterTasks(e)">
            </div>`;
}
function editTask(e) {
  e.path[1].style.backgroundColor = "#c5c5c5";
  e.target.offsetParent.childNodes[1].disabled = false;
}

function createTasks(ele) {
  if (tasks.length > 0 && !clearBtnEle.hasChildNodes()) {
    clearBtnRender();
  }
  let html_li = `<li class="list-group-item" data-key="${tasks.length}">
                    <input id="${tasks.length}" value="${ele}" onchange="editTaskArr(event)" type="text" disabled style="background-color: white; border: none; width: 100%"/>
                    <i class="fa-solid fa-pen-to-square edit-task" onclick="editTask(event,${tasks.length})"></i>
                </li>
                `;

  tasksLists.innerHTML += html_li;
}

function clearTasks() {
  tasks = [];
  tasksLists.innerHTML = "";
  clearBtnRemove();
}

function editTaskArr(e) {
  tasks[e.target.id - 1] = e.target.value;
  e.target.disabled = true;
  e.path[1].style.backgroundColor = "#fff";
}

function renderFilterTasks(filterArr) {
  console.log(filterArr);
  let html = "";
  filterArr.forEach((ele, i) => {
    html += `<li class="list-group-item" data-key="${i + 1}">
                            <input id="${
                              i + 1
                            }" value="${ele}" onchange="editTaskArr(event, ${
      i + 1
    })" type="text" disabled style="background-color: #fff; border: none; width: 100%"/>
                            <i class="fa-solid fa-pen-to-square edit-task" onclick="editTask(event,${
                              i + 1
                            })"></i>
                        </li>`;
  });

  tasksLists.innerHTML = html;
}

function filterTasks(e) {
  console.log(e);
  let filterTasksArr = tasks.filter((task) => {
    return task.startsWith(e.target.value);
  });
  console.log(filterTasksArr, e.target.value);
  renderFilterTasks(filterTasksArr);
}

function hello(e) {
  console.log(e.target.value);
}
