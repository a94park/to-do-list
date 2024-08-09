const taskInput = document.getElementById("taskInput")
const taskContainer = document.getElementById("taskContainer")

function addTask() {
    if(taskInput.value === "") {
        alert("You must write something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskContainer.appendChild(li);

        let spanX = document.createElement("span");
        spanX.id = "xButton";
        spanX.innerHTML = "\u00d7";
        li.appendChild(spanX);
        
        let spanCh = document.createElement("span");
        spanCh.id = "chButton";
        spanCh.innerHTML = "&#10003;";
        li.appendChild(spanCh);

    }
    taskInput.value = "";
    saveData();
}
taskContainer.addEventListener("click", function(e) {
    if(e.target.id === "xButton") {
        e.target.parentElement.remove()
        saveData()
    }
    else if(e.target.id === "chButton") {
        e.target.parentElement.classList.toggle("strike")
        saveData()
    }
})
function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}
function showTask() {
    taskContainer.innerHTML = localStorage.getItem("data");
}
showTask()