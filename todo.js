'use strict';
let taskArray = [];
let taskbar = document.querySelector('.todo__input');
let backlogTasks = document.querySelector('.backlog__tasks__list');
let activeTasks = document.querySelector('.active__tasks__list');
let completedTasks = document.querySelector('.completed__tasks__list');


taskbar.addEventListener('keydown', (key) => {
    if (taskbar.value === 'New Task...') {
        taskbar.value = '';
    }
    if (key.code === 'Enter') {
        let listEntry = document.createElement('li');
        let taskID = getnewTaskId();
        let taskObject = { name: taskbar.value, active: true, id: taskID }
        taskArray.push(taskObject)
        listEntry.setAttribute('id', taskID);
        listEntry.innerText = taskObject.name;
        listEntry.addEventListener('dblclick', () => {
            taskArray[taskArray.indexOf(taskObject)].active = false;
            moveElement(document.getElementById(taskID), completedTasks);
        })

        activeTasks.appendChild(listEntry);
        taskbar.value = "New Task...";
        console.log(taskArray);
    }
})

function moveElement(origin, destination) {
    origin.parentElement.removeChild(origin);
    destination.appendChild(origin);
}

function getnewTaskId() {
    if (taskArray.length === 0) {
        return 1;
    }
    return taskArray[taskArray.length - 1].id + 1;

}

