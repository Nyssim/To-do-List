//Tags Chamadas
const input_evento = document.querySelector("#text-event");
const complete_button = document.querySelector("#complete-button");
const delete_button = document.querySelector("#delete-button");
const task_button = document.querySelector("#add-task-button");
const content = document.querySelector(".content");
const task_card = document.querySelectorAll(".task-card");

//Armazenamento
tasks = []

//Funções
function show_task() {
    let new_task = '';

    tasks.forEach((task, index) => {
        new_task += `<div class="task-card ${task.status && "active"}">
        <div class="icon-interactivity">
            <img src="assets/circle-check-svgrepo-com.svg" alt="complete" id="complete-button" onclick="complete_task(${index})">
        </div>
        <div class="task-info">
            <p>${task.tarefa}</p>
        </div>
        <div class="icon-interactivity">
            <img src="assets/trash-svgrepo-com.svg" alt="delete" id="delete-button" onclick="delete_task(${index})">
        </div>
    </div>`
    })

    content.innerHTML = new_task
}

//Eventos
task_button.addEventListener('click', (add_task) => {
    if (input_evento.value != "") {
        tasks.push({
            tarefa: input_evento.value,
            status: false
        });
        show_task();
        input_evento.value = "";
    }
});

function delete_task(index) {
    tasks.splice(index, 1);
    show_task()
}

function complete_task(index) {
    tasks[index].status = !tasks[index].status;
    console.log(tasks[index].status)
    show_task()
}