/*

VERSION 3 -Requirements
1.) It should store the todos array on an object
2.) It should have a displayTodos method
3.) It should have an addTodo method
4.) It should have a changeTodo method
5. It should have a deleTodo method

*/


// var todoList = {
//     todos: ['first','second','third'],
//     displayTodos: function() {
//         console.log(this.todos);
//     },
//     addTodo: function(newTodo) {
//         this.todos.push(newTodo);
//         this.displayTodos();
//     },
//     changeTodo: function(position, todo) {
//         this.todos[position] = todo;
//         this.displayTodos();
//     },
//     deleteTodo: function(position) {
//         this.todos.splice(position,1);
//         this.displayTodos();
//     }
// }


/*

VERSION 4 Booleans -Requirements
1.) todoList addTodo should add objects
2.) todoList changeTodo should change the todoText property
3.) todoList toggleCompleted should flip the completed property

*/

var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todoText) {
       this.todos.push({
           todoText: todoText,
           completed: false
       });
       this.displayTodos();
    },
    changeTodo: function(position,todoText) {
       this.todos[position].todoText = todoText;
       this.displayTodos();
    },
    deleTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}





