const motivations = [
    "U R The Karinakl",
    "U R The KodumKaat",
    "U got thissss",
    "If someone can do it, anvee can!!",
    "anvee cannnn",
    "Ur taste in men is top notch",
    "Go GO GOOOOO",
    "Support Support",
    "Windshield is bigger than the rierview mirror",
    "Elevator to success is closed, take the stairs. One step at a time",
    "You dropped this: 👑. ",
    "UPPPPPPPP!!!!!!!!"
]

// localStorage.clear();

const btn = document.querySelector(".add-btn");
const clr = document.querySelector('.clr-btn');
const first = document.querySelector(".first");
let todo = JSON.parse(localStorage.getItem("todolist")) || [];

let todo_list = todo.spl


for(const tasks of todo){
    const new_div = document.createElement('div');
    new_div.classList.add("todo-list-item");
    const new_inp = document.createElement('input');
    const input_type = document.createAttribute('type');
    input_type.value = 'checkbox';
    new_inp.classList.add("todo-check");
    new_inp.setAttributeNode(input_type);

    const item = document.createElement('ol');
    item.classList.add('todo-task')
    item.innerHTML = tasks;

    new_div.appendChild(new_inp)
    new_div.appendChild(item);

    first.after(new_div);
}

function print_text(){
    let todo1 = JSON.parse(localStorage.getItem("todolist")) || [];
    console.log(todo1);
}

clr.addEventListener('click', ()=>{
    localStorage.clear();
    todo=[];
    window.location.reload();
})

btn.addEventListener("click", ()=>{
    const new_task = document.querySelector(".new-task-input").value;
    document.querySelector(".new-task-input").value = "";
    if(new_task==""){
        alert("Enter task")
    }
    else{
        console.log("New Task : " + new_task);
        let todos2 = JSON.parse(localStorage.getItem("todolist")) || [];
        todos2.push(new_task);
        localStorage.setItem("todolist", JSON.stringify(todos2));

        const new_div = document.createElement('div');
        new_div.classList.add("todo-list-item");
        const new_inp = document.createElement('input');
        const input_type = document.createAttribute('type');
        input_type.value = 'checkbox';
        new_inp.classList.add("todo-check");
        new_inp.setAttributeNode(input_type);

        const item = document.createElement('ol');
        item.classList.add('todo-task')
        item.innerHTML = new_task;

        new_div.appendChild(new_inp)
        new_div.appendChild(item);

        first.after(new_div);

        print_text();
    }
})


