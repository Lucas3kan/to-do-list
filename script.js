const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
    if(e.key == "enter"){
        addTask()
    }
})

function addTask(){
    if (inputbox.value == ""){
        alert("você deve escrever algo!");
    } else {
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        let span= document.createElement("span");
        span.innerHTML= "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputbox.value = "";
    saveData()
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveData
    }
})

//fetch data from Local storage

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()

