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

// var todoList = {
//     todos: [],
//     displayTodos: function() {
//         console.log('My Todos: ', this.todos);
//     },
//     addTodo: function(todoText) {
//        this.todos.push({
//            todoText: todoText,
//            completed: false
//        });
//        this.displayTodos();
//     },
//     changeTodo: function(position,todoText) {
//        this.todos[position].todoText = todoText;
//        this.displayTodos();
//     },
//     deleTodo: function(position) {
//         this.todos.splice(position, 1);
//         this.displayTodos();
//     },
//     toggleCompleted: function(position) {
//         var todo = this.todos[position];
//         todo.completed = !todo.completed;
//         this.displayTodos();
//     }
// }

/*

VERSION 5 Loops of Logic -Requirements
1.) displayTodos should show todoText
2.) displayTodos should tell if todos is empty
3.) displayTodos should show completed

*/

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		if (this.todos.length === 0) {
// 			console.log('Your todos is empty!');
// 		} else {
// 			console.log('My Todos:');
// 			for (var i = 0; i < this.todos.length; i++) {
// 				if (this.todos[i].completed === false) {
// 					console.log('(x) ', this.todos[i].todoText);
// 				} else {
// 					console.log('( ) ', this.todos[i].todoText);
// 				}
// 			}
// 		}
// 	},
// 	addTodo: function(todoText) {
// 		this.todos.push({
// 			todoText: todoText,
// 			completed: false
// 		});
// 		this.displayTodos();
// 	},
// 	changeTodo: function(position, todoText) {
// 		this.todos[position].todoText = todoText;
// 		this.displayTodos();
// 	},
// 	deleTodo: function(position) {
// 		this.todos.splice(position, 1);
// 		this.displayTodos();
// 	},
// 	toggleCompleted: function(position) {
// 		var todo = this.todos[position];
// 		todo.completed = !todo.completed;
// 		this.displayTodos();
// 	}
// };

/*

VERSION 6 Thingking In Code
1.) toggleAll: If everything is true, make everything false
2.) Otherwise, make everything false

*/

var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todos is empty!');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === false) {
					console.log('( ) ', this.todos[i].todoText);
				} else {
					console.log('(x) ', this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
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
	},
	toggleAll: function() {
		//completedTodos = totalTodos
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		//get total number of comppleted todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		//if everything is true, make everything false
		for (var i = 0; i < totalTodos; i++) {
			if (completedTodos === totalTodos) {
				this.todos[i].completed = false;
			} else {
				this.todos[i].completed = true;
			}
		}

		todoList.displayTodos();
	}
};
