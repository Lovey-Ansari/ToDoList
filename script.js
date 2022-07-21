//declare
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const themeToggle = document.querySelector(".themeToggle");
const body = document.getElementsByTagName("BODY")[0];
const filterAll = document.querySelector(".all");
const filterComplete = document.querySelector(".complete");
const filterIncomplete = document.querySelector(".incomplete");
const toggleBtn = document.querySelector(".toggle-button");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
themeToggle.addEventListener("click", changeTheme);
filterAll.addEventListener("click", filterA);
filterComplete.addEventListener("click", filterC);
filterIncomplete.addEventListener("click", filterI);

//functions

//CREATING TODO
function addTodo() {
  event.preventDefault();
  //create todo DIV
  if (todoInput.value != "") {
    const todoDiv = document.createElement("div");
    if (body.classList.contains("lightBody")) {
      todoDiv.classList.add("lightTodo");
    } else {
      todoDiv.classList.add("darkTodo");
    }
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const delButton = document.createElement("button");
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delButton.classList.add("delete-btn");
    todoDiv.appendChild(delButton);
    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkedButton.classList.add("checked-btn");
    todoDiv.appendChild(checkedButton);
    //APPEND TODO DIV TO UL
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  } else {
    alert(`Enter Task`);
  }
}

//TOGGLE THEME

function changeTheme() {
  //-----------------------------------------------toggling the active filter theme----------------------------------------------------

  if (
    body.classList.contains("dark") &&
    filterAll.classList.contains("filterBtnEffect")
  ) {
    filterAll.classList.remove("filterBtnEffect");
    filterAll.classList.add("filterBtnEffect2");
  } else if (
    body.classList.contains("lightBody") &&
    filterAll.classList.contains("filterBtnEffect2")
  ) {
    filterAll.classList.remove("filterBtnEffect2");
    filterAll.classList.add("filterBtnEffect");
  }

  if (
    body.classList.contains("dark") &&
    filterComplete.classList.contains("filterBtnEffect")
  ) {
    filterComplete.classList.remove("filterBtnEffect");
    filterComplete.classList.add("filterBtnEffect2");
  } else if (
    body.classList.contains("lightBody") &&
    filterComplete.classList.contains("filterBtnEffect2")
  ) {
    filterComplete.classList.remove("filterBtnEffect2");
    filterComplete.classList.add("filterBtnEffect");
  }

  if (
    body.classList.contains("dark") &&
    filterIncomplete.classList.contains("filterBtnEffect")
  ) {
    filterIncomplete.classList.remove("filterBtnEffect");
    filterIncomplete.classList.add("filterBtnEffect2");
  } else if (
    body.classList.contains("lightBody") &&
    filterIncomplete.classList.contains("filterBtnEffect2")
  ) {
    filterIncomplete.classList.remove("filterBtnEffect2");
    filterIncomplete.classList.add("filterBtnEffect");
  }

  //--------------------------------------------------------changing body-------------------------------------------------------------//
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("lightBody");
  } else {
    body.classList.remove("lightBody");
    body.classList.add("dark");
  }
  //---------------------------------------------------------changing todo theme----------------------------------------------------//
  if (todoInput.classList.contains("lightInput")) {
    todoInput.classList.remove("lightInput");
    todoInput.classList.add("todo-input");
  } else if (todoInput.classList.contains("todo-input")) {
    todoInput.classList.remove("darkTodo");
    todoInput.classList.add("lightInput");
  }
  todoList.childNodes.forEach((items) => {
    if (items.classList.contains("lightTodo")) {
      items.classList.remove("lightTodo");
      items.classList.add("darkTodo");
    } else if (items.classList.contains("darkTodo")) {
      items.classList.remove("darkTodo");
      items.classList.add("lightTodo");
    }
  });
  //----------------------------------------------------------toggling general theme---------------------------------------//
  todoButton.classList.toggle("lightTodoButton");
  themeToggle.classList.toggle("themeToggleLight");
  const title = document.querySelector(".titleCont");
  title.classList.toggle("lightTitleCont");
  filterAll.classList.toggle("lightFilterBtn");
  filterComplete.classList.toggle("lightFilterBtn");
  filterIncomplete.classList.toggle("lightFilterBtn");
}

//------------------------------------------------------------END OF THEME TOGGLE----------------------------------------------//

//DELETE AND CHECK
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("transition");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "checked-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//FILTER THE TODOS

//----------------------------------------------------------------ALL Filter------------------------------------------------------------------
function filterA(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    todo.style.display = "flex";
  });
  if (body.classList.contains("lightBody")) {
    filterAll.classList.add("filterBtnEffect2");
  } else {
    filterAll.classList.add("filterBtnEffect");
  }

  if (
    filterComplete.classList.contains("filterBtnEffect") ||
    filterIncomplete.classList.contains("filterBtnEffect")
  ) {
    filterComplete.classList.remove("filterBtnEffect");
    filterIncomplete.classList.remove("filterBtnEffect");
  }
  if (
    filterComplete.classList.contains("filterBtnEffect") ||
    filterIncomplete.classList.contains("filterBtnEffect")
  ) {
    filterComplete.classList.remove("filterBtnEffect");
    filterIncomplete.classList.remove("filterBtnEffect");
  }

  if (
    filterComplete.classList.contains("filterBtnEffect2") ||
    filterIncomplete.classList.contains("filterBtnEffect2")
  ) {
    filterComplete.classList.remove("filterBtnEffect2");
    filterIncomplete.classList.remove("filterBtnEffect2");
  }
}

//-----------------------------------------------------------------COMPLETED Filter------------------------------------------------------

function filterC(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    if (todo.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
  if (body.classList.contains("lightBody")) {
    filterComplete.classList.add("filterBtnEffect2");
  } else {
    filterComplete.classList.add("filterBtnEffect");
  }
  if (
    filterAll.classList.contains("filterBtnEffect") ||
    filterIncomplete.classList.contains("filterBtnEffect")
  ) {
    filterAll.classList.remove("filterBtnEffect");
    filterIncomplete.classList.remove("filterBtnEffect");
  }
  if (
    filterAll.classList.contains("filterBtnEffect2") ||
    filterIncomplete.classList.contains("filterBtnEffect2")
  ) {
    filterAll.classList.remove("filterBtnEffect2");
    filterIncomplete.classList.remove("filterBtnEffect2");
  }
}

//--------------------------------------------------------------INCOMPLETED Filter-------------------------------------------------------------

function filterI(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    if (todo.classList.contains("completed")) {
      todo.style.display = "none";
    } else {
      todo.style.display = "flex";
    }
  });
  if (body.classList.contains("lightBody")) {
    filterIncomplete.classList.add("filterBtnEffect2");
  } else {
    filterIncomplete.classList.add("filterBtnEffect");
  }
  if (
    filterComplete.classList.contains("filterBtnEffect") ||
    filterAll.classList.contains("filterBtnEffect")
  ) {
    filterComplete.classList.remove("filterBtnEffect");
    filterAll.classList.remove("filterBtnEffect");
  }
  if (
    filterComplete.classList.contains("filterBtnEffect2") ||
    filterAll.classList.contains("filterBtnEffect2")
  ) {
    filterComplete.classList.remove("filterBtnEffect2");
    filterAll.classList.remove("filterBtnEffect2");
  }
}
