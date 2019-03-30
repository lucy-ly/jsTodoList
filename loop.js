//The for loop
far (var i = 0; i < 3; i++) {
    console.log("hey");
}

//Looping over arrays
far (var i = 0; i < 3; i++) {
console.log(i);
}

testArray[0] //"item 1"
testArray[1] //"item 2"
testArray[2] //"item 3"

for (var i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
}

item 1
item 2
item 3

//Requirements
//.displayTodos should show .todoText
var todoList = {
        todos: [],
        displayTodos: function() {
            console.log('My Todos', this.todos);
            for (var i = 0; i < this.todos.length; i++) {
                //this.todos.length has 3 items
                //i = 0
                //i = 1
                //i = 2
                console.log(this.todos[i].todoText);
            }
        }
    },
    
//displayTodos should tell you if .todos is empty            
var todoList = {
        todos: [],
        displayTodos: function() {
            if (this.todos.length === 0) {
                console.log('Your todo list is empty!');
            } else {
                console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                //this.todos.length has 3 items
                //i = 0
                //i = 1
                //i = 2
                console.log(this.todos[i].todoText);
            }
        }
    },

//displayTodos should show .completed
var todoList = {
        todos: [],
        displayTodos: function() {
            if (this.todos.length === 0) {
                console.log('Your todo list is empty!');
            } else {
                console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {    
                console.log('( )', this.todos[i].todoText);
            }
        }
    }
},





