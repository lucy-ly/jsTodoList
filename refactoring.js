//HTML V.08

//Refactoring

<!DOCTYPE html>
<html>

    <head>
        <link rel=“stylesheet” href=“styles.css”>
    </head>

    <body>
        <h1>Todo List</h1>
        
        <button id="displayTodosButton">Display Todos</button>
        <button id="toggleAllButton">Toggle All</button>
        
        <button onclick="handlers.displayTodos()">Display Todos</button>
        <button onclick="handlers.toggleAll()">Toggle All</button>
        
        <script src="htmlDOM.js"></script>
    </body>

</html>

//CSS

/*//Refactoring*/
var todoList= {
    todos: [],
    displayTodos: function() {
        if (this.todos.length===0) {
            console.log('Your todo list is empty!');
        }
        else {
            console.log('My Todos:');
            for (var i=0;
            i < this.todos.length;
            i++) {
                if (this.todos[i].completed===true) {
                    console.log('(x)', this.todos[i].todoText);
                }
                else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },

addTodo: function(todoText) {
        this.todos.push( {
            todoText: todoText,
            completed: false
        }
        ),
        this.displayTodos();
changeTodo: function(position, todoText) {
            this.todos[position].todoText=todoText;
            this.displayTodos();
        }
        ,
deleteTodo: function(position) {
            this.todos.splice(position, 1);
            this.displayTodos();
        }
        ,
toggleCompleted: function(position) {
            var todo: this.todos[position];
            todo.completed=!todo.completed;
            this.displayTodos();

    }
};


var displayTodosButton=document.getElementById('displayTodosButton');
    console.log(displayTodosButton);
var toggleAllButton=document.getElementById('toggleAllButton');
    console.log(toggleAllButton);


    displayTodosButton.addEventListener('click", function() {
        todoList.displayTodos();
    }

);
toggleAllButton.addEventListener('click", function() {
        todoList.toggleAll();
    }

);

var handlers= {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    };




