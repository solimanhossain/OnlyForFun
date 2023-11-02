let task_form = document.querySelector('form');
let complete_list = document.querySelector('.complete-list ul');
let task_li = document.querySelector("#items");
let task_list = task_li.querySelectorAll('input[type="checkbox"]');

// add task
let task_create = (task) => {
    let li_tag = document.createElement('li');
    let box_tag = document.createElement('input');
    let label_tag = document.createElement('label');

    label_tag.innerText = task;
    box_tag.type = 'checkbox';

    li_tag.appendChild(box_tag);
    li_tag.appendChild(label_tag);
    return li_tag;
}

// task list
task_form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let task_text = document.getElementById("new-task");
    let task_list = document.querySelector("#items");
    let new_li = task_create(task_text.value);
    task_list.appendChild(new_li);

    task_text.value = '';
    completeList(new_li);
});

// complete task
let complete_task = (task) => {
    let li_tag = document.createElement('li');
    let button_tag = document.createElement('button');

    li_tag.className = "class";
    li_tag.innerText = task.innerText;
    button_tag.className =  "delete";
    button_tag.innerText = 'Delete';
    li_tag.setAttribute('onclick',`this.remove()`);
    li_tag.appendChild(button_tag);
    complete_list.appendChild(li_tag);
    task.remove();
}

// completed list
let completeList = (new_li) => {
    let checkBox = new_li.querySelector('input[type="checkbox"]');
    checkBox.onchange = () => {
        complete_task(checkBox.parentElement);
    }
}
task_list.forEach(list => {
    list.onchange = () => { 
        complete_task(list.parentElement)
    }
});  