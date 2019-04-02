// version11 html and dom

// booleans: true or false
var todoList = {
    todos: [],

    addTodo: function(todoText) {
        this.todos.push({
            todotext: todoText,
            completed: false
        });
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // get number of completed todos.
        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }
        
        // forEach Method
        this.todos.forEach(function(todo) {
            if (todo.completewd === true) {
                completedTodos++;
            }
        });
        
        // // Case 1: If evertyting is true, make everything false.
        // if (completedTodos === totalTodos) {
        //     // make everything false
            
        // // Case 2: otherwise, make everything false.
        // // }
        //     this.todos.forEach(function(todo){
        //     todo.completed = false;
        // });
    
        // }  else {
        //     // for (var i = 0; i < totalTodos; i++) {
        //     //     this.todos[i].completed = true;
        //     // }
        //     this.todos.forEach(function(todo){
        //     todo.completed = true;
        //     });
        // }
        
        this.todos.forEach(function(todo){
            // Case: 1 If everything is true, make everuthing false.
            if (completedTodos === totalTodos){
                todo.completed = false;
            // Case: 2 Otherwise, make everyhting true.
            } else {
                todo.completed = true;
            }
        });
    }   
};

// // 1. We want to get access to the display todos button.
// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById("toggleAllButton");

// // 2. We want to run the display todos method 
// //    when someone click display todos button.
// displayTodosButton.addEventListener('click', function(){
//     todosList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
//     todosList.toggleAll();
// });

// Refactoring code Above
var handlers = {
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();

    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },

    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.value = '';
    },

};
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            todosUl.appendChild(todoLi);
        }
    }
};
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        // for (var i = 0; i < todoList.todos.length; i++) {
        //     var todoLi = document.createElement('li');
        //     var todo = todoList.todos[i];
        //     var todoTextWithCompletion = '';

        //     if (todo.completed === true) {
        //         todoTextWithCompletion = '(x)' + todo.todoText;
        //     }
        //     else {
        //         todoTextWithCompletion = '( )' + todo.todoText;
        //     }
        //     todoLi.id = i;
        //     todoLi.textContent = todoTextWithCompletion;
        //     todoLi.appendChild(this.createDeleteButton());
        //     todosUl.appendChild(todoLi);
        // }
        
        // this refers to the view object
        // for Each(callback, this)
        
        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x)' + todo.todoText;
            } else {
                todoTextWithCompletion = '( )' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');
        
        todosUl.addEventListener('click', function(event) {
            var elementClicked = event.target;
            
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
                }
        });
    }
};

view.setUpEventListeners();