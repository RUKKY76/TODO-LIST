const addBtn = document.getElementById("add");
const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", function () {
  addTask();
});

const addTask = () => {
  if (input.value === "") {
    alert("you can not add a blank task!");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = input.value;
    li.appendChild(p);
    const i = document.createElement("i");
    li.appendChild(i);
    
    i.className = "fa-solid fa-trash-can"
    listContainer.appendChild(li);
    input.value = "";
    storeData();
  }

};

const storeData = function () {
  localStorage.setItem("taskContent", listContainer.innerHTML)
};

const getData = function () {
  return localStorage.getItem("taskContent");
};

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    storeData()
  }

  if (e.target.tagName === "P") {
    console.log(e.target);
    e.target.classList.toggle("checked");
    console.log(e.target.classList);
  }

});

listContainer.innerHTML = getData();


