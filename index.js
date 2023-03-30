const todoForm = document.querySelector(".todo-section-form");
const todoInput = document.querySelector(".todo-section-form input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoInput);
todoForm.addEventListener("submit", (e) => {
    // console.log(todoInput.value);
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newTodoList = document.createElement("li");
    const newTodoListInnerHTML = `<span class="span-text">${newTodoText}</span>
                                  <div class="btn">
                                        <button type="submit">Done</button>
                                        <button type="submit">Remove</button>
                                  </div>`
    newTodoList.innerHTML = newTodoListInnerHTML;
    todoList.append(newTodoList);                              
    todoInput.value = "";
})