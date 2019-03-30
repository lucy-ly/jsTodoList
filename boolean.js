//todoList.addTodo should add objects
{
    todoText: 'item 1',
    completed: false // Boolean can be represented as true or false
}

var todoList = {
        todos: [],
        displayTodos: function() {
            console.log('My Todos', this.todos);
        },
        addTodo: function(todoText) {
            this.todos.push({
                todoText: todoText,
                completed: false
        }),
            this.displayTodos();
        changeTodo: function(position, todoText) {
            this.todos[position].todoText = todoText;
            this.displayTodos();
        },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
            this.displayTodos();
        },
        toggleCompleted: function(position) {
            var todo: this.todos[position];
            todo.completed = !todo.completed;
            this.displayTodos();

        }
    };

//bang operator !
var gordonBoolean = false;!gordonBoolean // opposite of false is true
    gordonBoolean = !gordonBoolean; // true
