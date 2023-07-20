const darkModeToggle = document.getElementById("toggle-Dark");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-list");
const body = document.querySelector("body");
const theme = localStorage.getItem("theme");

darkModeToggle.addEventListener('click', changeTheme);

function themeToggle() {
    if (theme != null) {
        body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('fa-moon');
    }
}
themeToggle();

function changeTheme() {
    let theme = localStorage.getItem("theme");
    if (theme != null) {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", "dark-mode");
    }
    body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle('fa-moon');
}

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})

function addTask() {
    if (inputBox.value === '') {
        alert("You must type something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        localStorage.setItem("data", listContainer.innerHTML);
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        localStorage.setItem("data", listContainer.innerHTML);
    }
}, false);

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();