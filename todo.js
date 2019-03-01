/*

VERSION 3 -Requirements
1.) It should store the todos array on an object
2.) It should have a displayTodos method
3.) It should have an addTodo method
4.) It should have a changeTodo method
5. It should have a deleTodo method

*/


var todoList = {
    todos: ['first','second','third'],
    displayTodos: function() {
        console.log(this.todos);
    },
    addTodo: function(newTodo) {
        this.todos.push(newTodo);
        this.displayTodos();
    },
    changeTodo: function(position, todo) {
        this.todos[position] = todo;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
}


