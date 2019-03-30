//HTML essentials, describes webpages. DOM Document Object Model - browsers interpretation
<!DOCTYPE html>
<html>

    <head>
        <link rel=“stylesheet” href=“styles.css”> //does not have a closing tag
        <script src="script.js"></script>
    </head>

    <body>
        <h1>Hello World!</h1>
        <h2>Subsection title</h2>
        <h3>Subsection title</h3>
        <p>For text</p>
    </body>

</html>


//There should be a "Display todos" button and a "Toggle all" button in the app

<!DOCTYPE html>
<html>

    <head>
        <link rel=“stylesheet” href=“styles.css”>
        <script src="script.js"></script>
    </head>

    <body>
        <h1>Todo List</h1>
        
        <button>Display Todos</button>
        <button>Toggle All</button>
        
    </body>

</html>


//Clicking "Display todos" should run todoList.displayTodos

<!DOCTYPE html>
<html>

    <head>
        <link rel=“stylesheet” href=“styles.css”>
    </head>

    <body>
        <h1>Todo List</h1>
        
        <button id="displayTodosButton">Display Todos</button>
        <button>Toggle All</button>
        
        <script src="script.js"></script>
  
    </body>

</html>

//1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton'); 
console.log(displayTodosButton);

//2. We want to run displayTodos method, when someone clicks the display todos button.
displayTodosButton.addEventListener('click", function() {
    todoList.displayTodos();
});

//Clicking "Toggle all" should run todoList.toggleAll

<!DOCTYPE html>
<html>

    <head>
        <link rel=“stylesheet” href=“styles.css”>
    </head>

    <body>
        <h1>Todo List</h1>
        
        <button id="displayTodosButton">Display Todos</button>
        <button id="toggleAllButton">Toggle All</button>
        
        <script src="script.js"></script>
  
    </body>

</html>


//.toggleAll: Otherwise, make everything true.
toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
            completedTodos++;
        }
    }
    //Case 1: If everything's true, make everything false.
    if (completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = false;
        }
    
    //Case 2: Otherwise, make everything true.
    } else {
        for (var i = 0)
    }
    
        this.displayTodos();
    }
};

var displayTodosButton = document.getElementById('displayTodosButton'); 
console.log(displayTodosButton);
var toggleAllButton = document.getElementById('toggleAllButton'); 
console.log(toggleAllButton);


displayTodosButton.addEventListener('click", function() {
    todoList.displayTodos();
});
toggleAllButton.addEventListener('click", function() {
    todoList.toggleAll();
});