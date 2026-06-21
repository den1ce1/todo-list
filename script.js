const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        inputBox.classList.add("error-shake");
        setTimeout(() => inputBox.classList.remove("error-shake"), 400);
        return;
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = "";
    storeToDoList();
}

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeToDoList();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeToDoList();
    }
}, false);

function storeToDoList() {
    localStorage.setItem("to-do-list", listContainer.innerHTML);
}

function restoreToDoList() {
    listContainer.innerHTML = localStorage.getItem("to-do-list");
}

restoreToDoList();