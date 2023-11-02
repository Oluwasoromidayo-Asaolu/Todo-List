let inputField = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let taskDiv = document.querySelector('.to-do-items');

function inputFieldLength(){
    return inputField.value.trim().length;
}

function addTaskByAddBtn(){
    if(inputFieldLength() > 0){
        addList()
    }
}
function addTaskByKeyPress(){
    if(inputFieldLength() > 0 && event.keyCode === 13){
        addList()
    }
}
function addList(){
        let div = document.createElement('div');
        div.innerHTML = `
            <span class='task'>${inputField.value}</span>
            <div class='trashcheck'>
            <input class='checked' type='checkbox'>
            <i class="fa-solid fa-trash-can fa-xl"></i>
            </div>
            `

        div.classList.add('item');
        let trashCan = div.querySelector('.fa-trash-can');
        taskDiv.appendChild(div);
        inputField.value = '';
        saveData();
        trashCan.addEventListener('click', function(){
            div.remove();
        })
}

function saveData(){
    localStorage.setItem('data', taskDiv.innerHTML)
}
function showTask(){
    taskDiv.innerHTML = localStorage.getItem('data');
}
showTask();
addBtn.addEventListener('click', addTaskByAddBtn);
inputField.addEventListener('keypress', addTaskByKeyPress);