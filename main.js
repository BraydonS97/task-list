const darkModeToggle = document.getElementById("toggle-Dark");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-list");
const body = document.querySelector("body");

setTheme();
darkModeToggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');

    if (this.classList.toggle('fa-sun')) {
        moduleSaveData("darkTheme", false);
    } else {
        moduleSaveData("darkTheme", true);
    }
    setTheme();
})

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
    moduleSaveData("data", listContainer.innerHTML);
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        moduleSaveData("data", listContainer.innerHTML);
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        moduleSaveData("data", listContainer.innerHTML);
    }
}, false);


function moduleSaveData(dataStoreName, dataSaving) {
    localStorage.setItem(dataStoreName, dataSaving);
}

function setTheme() {
    let darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme == "true") {
        body.style.background = '#24313a';
        body.style.transition = '2s';
    } else if (darkTheme == "false") {
        body.style.background = 'rgb(209, 209, 209)';
        body.style.transition = '2s';
    } else {
        // do nothing
    }
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();