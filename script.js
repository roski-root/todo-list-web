const input = document.querySelector("#task_input");
const submit = document.querySelector("#submit_button");
const tasksContainer = document.querySelector(".tasks_container");

submit.addEventListener("click", function() {
    const input_value = input.value;
    
    if (input_value !== null) {
        const newElement = document.createElement("div");
        newElement.classList.add("task_container");

        newElement.innerHTML = `<p class="text">${input_value}</p> <button class="delete_button">Delete</button>`;

        tasksContainer.appendChild(newElement);

        input.value = null;

        const deleteButton = newElement.querySelector(".delete_button");
        deleteButton.addEventListener("click", function() {
            newElement.remove();
        });
    }
});
