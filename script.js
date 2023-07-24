// Grabs input
const field = document.querySelector("#theTodo");
// Grabs unordered list
const ul = document.querySelector("#todoList");
// Event listener for the submit button
document.querySelector('#todoForm').addEventListener("submit", function(event) {
    event.preventDefault();

    // Creates todo object
    const todoText = field.value;
    if (todoText) {

        // Create todo item
        const li = document.createElement("li");
        li.textContent = todoText;

        // Delete button
        const del = document.createElement("button");
        del.innerText = "X";

        del.addEventListener("click", function() {
            li.remove();
        });

        // Complete button
        const com = document.createElement("button");
        com.innerText = "Complete";

        com.addEventListener("click", function() {
            li.style.fontFamily = "Georgia";
            li.style.fontWeight = "700";
            li.style.color = "blue";
        });

        li.appendChild(com);
        li.appendChild(del);
        ul.appendChild(li);
    };
});