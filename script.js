let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('addBtn');
let taskDiv = document.getElementById('taskDiv');

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
            <input type='checkbox'>
            <span>${inputField.value}</span>
            `
        let taskDetails = div.querySelector('.taskDetails');
        let checkbox = div.querySelector('input[type="checkbox"]');
        taskDiv.appendChild(div);
        inputField.value = '';
        checkbox.addEventListener('change', function(){
            if(checkbox.checked){
                div.remove();
            }
        });
}

addBtn.addEventListener('click', addTaskByAddBtn);
inputField.addEventListener('keypress', addTaskByKeyPress);