function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        var taskText = taskInput.value;
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        li.appendChild(checkbox);
        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskSpan.classList.add("completed");
            } else {
                taskSpan.classList.remove("completed");
            }
        });
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
