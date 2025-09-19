// task 0
console.log("Name: Nurzhan Izimbetov");
console.log("Group: SE-2436");

function showAlert() {
  alert("Hello!");
}

// task 1
function demonstrateVariables() {
  const output = document.getElementById("variableOutput");
  let result = "<strong>example:</strong><br><br>";

  let userName = "Alice";
  let userAge = 19;
  let isStudent = true;

  result += `<span class="text-warning">String:</span> ${userName} (type: ${typeof userName})<br>`;
  result += `<span class="text-info">Number :</span> ${userAge} (type: ${typeof userAge})<br>`;
  result += `<span class="text-success">Boolean:</span> ${isStudent} (type: ${typeof isStudent})<br><br>`;

  let num1 = 15;
  let num2 = 4;

  result += `<span class="text-primary">Operations:</span><br>`;
  result += `${num1} + ${num2} = ${num1 + num2}<br>`;
  result += `${num1} - ${num2} = ${num1 - num2}<br>`;
  result += `${num1} * ${num2} = ${num1 * num2}<br>`;
  result += `${num1} / ${num2} = ${num1 / num2}<br><br>`;

  let firstName = "Nurzhan";
  let lastName = "Izimbetov";
  let fullName = firstName + " " + lastName;
  let greeting = `Hello, ${fullName}! You are ${userAge} years old.`;

  result += `<span class="text-danger">String:</span><br>`;
  result += `Full name: ${fullName}<br>`;
  result += `Greeting: ${greeting}<br>`;

  output.innerHTML = result;
}

// task 2
function changeContent() {
  const paragraph = document.getElementById("changingParagraph");
  const newTexts = [
    "The content changed",
    "New content",
    "JavaScript is fun!",
    "Welcome to DOM!",
  ];
  const alertTypes = [
    "alert-success",
    "alert-warning",
    "alert-info",
    "alert-primary",
  ];

  const randomIndex = Math.floor(Math.random() * newTexts.length);
  paragraph.textContent = newTexts[randomIndex];
  paragraph.className = `alert ${alertTypes[randomIndex]}`;
}

// task 3
let currentFontSize = 16;

function changeBackgroundColor() {
  const box = document.getElementById("styleBox");
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#feca57",
    "#ff9ff3",
    "#54a0ff",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
  box.style.color = "#fff";
}

function changeFontSize() {
  const box = document.getElementById("styleBox");
  currentFontSize =
    currentFontSize === 16 ? 24 : currentFontSize === 24 ? 32 : 16;
  box.style.fontSize = currentFontSize + "px";
}

// task 4
let itemCounter = 3;

function addItem() {
  const list = document.getElementById("dynamicList");
  const newItem = document.createElement("li");
  newItem.className = "list-group-item list-group-item-action";
  newItem.textContent = `Dynamic Item ${itemCounter}`;
  list.appendChild(newItem);
  itemCounter++;
}

function removeItem() {
  const list = document.getElementById("dynamicList");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  } else {
    alert("No items to remove!");
  }
}

// task 5
function changeOnMouseOver() {
  const box = document.getElementById("mouseBox");
  box.classList.remove("bg-primary");
  box.classList.add("bg-success");
  box.textContent = "Mouse is over me!";
}

function changeOnMouseOut() {
  const box = document.getElementById("mouseBox");
  box.classList.remove("bg-success");
  box.classList.add("bg-primary");
  box.textContent = "Hover over me!";
}

// task 6
function displayInputValue() {
  const input = document.getElementById("keyboardInput");
  const display = document.getElementById("liveDisplay");
  const value = input.value;

  if (value.trim() === "") {
    display.innerHTML = "<em>Your input will appear here as you type...</em>";
    display.className = "alert alert-info";
  } else {
    display.innerHTML = `You typed: <strong>${value}</strong> <span class="badge bg-secondary">${value.length} characters</span>`;
    display.className = "alert alert-success";
  }
}

// task 7
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const password = document.getElementById("userPassword").value.trim();
  const errorDiv = document.getElementById("formError");

  let errors = [];

  if (name === "") errors.push("Name is required");
  if (email === "") errors.push("Email is required");
  if (password === "") errors.push("Password is required");

  if (errors.length > 0) {
    errorDiv.innerHTML = `
                    <div class="alert alert-danger">
                        <strong>Validation failed:</strong><br>
                        ${errors.map((error) => `• ${error}`).join("<br>")}
                    </div>
                `;
    return false;
  } else {
    errorDiv.innerHTML = `
                    <div class="alert alert-success">
                        <strong>Validation successful!</strong> All fields are filled correctly.
                    </div>
                `;
    setTimeout(() => {
      errorDiv.innerHTML = "";
      document.getElementById("validationForm").reset();
    }, 3000);
    return false;
  }
}

// task 8
let todos = [];
let todoIdCounter = 1;

function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    // Create a temporary alert
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-warning alert-dismissible fade show mt-2";
    alertDiv.innerHTML = `
                    <strong>Warning!</strong> Please enter a task!
                    <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
                `;
    document
      .getElementById("todoContainer")
      .insertBefore(alertDiv, document.getElementById("todoList"));
    setTimeout(() => alertDiv.remove(), 3000);
    return;
  }

  const todo = {
    id: todoIdCounter++,
    text: taskText,
    completed: false,
  };

  todos.push(todo);
  input.value = "";
  renderTodos();
}

function deleteTask(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function toggleComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = `
                    <li class="list-group-item text-center text-muted">
                        <em>No tasks.</em>
                    </li>
                `;
    return;
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `list-group-item d-flex justify-content-between align-items-center ${
      todo.completed
        ? "list-group-item-success text-decoration-line-through opacity-75"
        : "list-group-item-light"
    }`;

    li.innerHTML = `
                    <span onclick="toggleComplete(${
                      todo.id
                    })" class="flex-grow-1" style="cursor: pointer;">
                        <span class="badge ${
                          todo.completed ? "bg-success" : "bg-secondary"
                        } me-2">
                            ${todo.completed ? "✅" : "⚪"}
                        </span>
                        ${todo.text}
                    </span>
                    <button class="btn btn-danger btn-sm" onclick="deleteTask(${
                      todo.id
                    })">
                        <i class="bi bi-trash"></i> Delete
                    </button>
                `;

    todoList.appendChild(li);
  });
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Learning Page Loaded Successfully!");
  renderTodos();
});
