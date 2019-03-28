//What is an object?
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};

myComputer;

//Objects and functions
var gordon = {
    name: 'Gordon',
    sayName: function() {
        console.log(this.name); //This is referring to the entire object. .name access the property of the object (Gordon). Method is a property equal to a function. sayName is a method on the Gordon object.
    }
}

//Using plunker plnkr.co

//Review
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
