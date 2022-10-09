// const btn = document.getElementById("add_button")
const todoKeys = "todoKeys";
let todoDBInstance = JSON.parse(localStorage.getItem(todoKeys)) || [];

const pageReload = () => {
  window.location.reload();
};

const addBtn = document.querySelector("#add_btn");
const editBtn = document.querySelector("#edit_btn");

// Todo: Creating the list
const addItems = () => {
  const todoInput = document.getElementById("todo-input");
  const title = todoInput.value;

  const todoDB = {
    _id: todoDBInstance.length + 1,
    title: title,
    isCompleted: false,
  };

  let Database = [...todoDBInstance, todoDB];
  localStorage.setItem(todoKeys, JSON.stringify(Database));
  pageReload();
};

// Todo: Rendering the list

function renderItems() {
  const displayItems = document.querySelector("#todo-list-items");
  const fetchItems = todoDBInstance
    .map(({ _id, title, isCompleted }) => {
      return `
        <li class= ${isCompleted && "checked"}>${title}
            <i class=" edit fa-regular fa-pen-to-square" onclick="editMode(${_id}"></i>
            <i class=" far fa-solid fa-trash" onclick="deleteTodo(${_id})"></i>
        </li> `;
    })
    .join("");
  displayItems.innerHTML = fetchItems;
  console.log(displayItems);
}

// Todo: Deleting the list
function deleteTodo(todoId) {
  const deleteAll = todoDBInstance.filter(({ _id }) => id !== todoId);
  localStorage.setItem(todoKeys, JSON.stringify(deleteAll));
}

// Add event listener
// document.querySelector(".addBtn").addEventListener("click", addItems);

//Update Function

const editMode = (_id) => {
  const todo = todoDBInstance.find((todo) => todo._id === _id);
  document.getElementById("todo-input").value = todo.title;
  addBtn.style.display = "none";
  editBtn.style.display = "block";
  editBtn.setAttribute("id", _id);
};

function updateTodoTitle() {
  const { id } = this;
  const _id = parseInt(id);
  const todoToUpdate = todoDBInstance.find((todo) => todo._id === _id);
  todoToUpdate.title = document.getElementById("todo-input").value;

  const updatedTodoDB = todoDBInstance.map((todo) =>
    todo._id === _id ? todoToUpdate : todo
  );
  localStorage.setItem(todoDBName, JSON.stringify(updatedTodoDB));
  pageReload();
}

// Delete Function
function deleteTodo(todoId) {
  const updatedTodoDB = todoDBInstance.filter(({ _id }) => _id !== todoId);
  localStorage.setItem(todoDBName, JSON.stringify(updatedTodoDB));
  pageReload();
}

// EventListeners
addBtn.addEventListener("click", addItems);
editBtn.addEventListener("click", updateTodoTitle);

// invoke
// renderTodoItems();
