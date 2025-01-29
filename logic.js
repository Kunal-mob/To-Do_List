const inputData = document.getElementById("input-box");
const taskList = document.getElementById("List-Container");

const addTask = () => {
  if (inputData.value == "") {
    alert("please enter data ");
  } else {
    let li = document.createElement("li");
    li.innerText = inputData.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
    saveData()
  }
  inputData.value = "";
};
inputData.addEventListener("keypress", (e)=>{
if(e.key === "Enter"){
    addTask();
}

})
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
});

function saveData(){
localStorage.setItem("data", taskList.innerHTML)
}
function showData(){
    taskList.innerHTML =localStorage.getItem("data");
}
showData();