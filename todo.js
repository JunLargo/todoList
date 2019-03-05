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

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		if (this.todos.length === 0) {
// 			console.log('Your todos is empty!');
// 		} else {
// 			console.log('My Todos:');
// 			for (var i = 0; i < this.todos.length; i++) {
// 				if (this.todos[i].completed === false) {
// 					console.log('( ) ', this.todos[i].todoText);
// 				} else {
// 					console.log('(x) ', this.todos[i].todoText);
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
// 	},
// 	toggleAll: function() {
// 		//completedTodos = totalTodos
// 		var totalTodos = this.todos.length;
// 		var completedTodos = 0;

// 		//get total number of comppleted todos
// 		for (var i = 0; i < totalTodos; i++) {
// 			if (this.todos[i].completed === true) {
// 				completedTodos++;
// 			}
// 		}

// 		//if everything is true, make everything false
// 		for (var i = 0; i < totalTodos; i++) {
// 			if (completedTodos === totalTodos) {
// 				this.todos[i].completed = false;
// 			} else {
// 				this.todos[i].completed = true;
// 			}
// 		}

// 		todoList.displayTodos();
// 	}
// };

/*

VERSION 7 & 8 HTML and the DOM
1.) There should be "Display Todos" button & a "Toggle All" button
2.) Clicking "Display Todos" should run todoList.displayTodos
3.) Click "Toggle All" should run todoList.toggleAll
4:) There should be a button for changing todos
5:) There shoud be a button for deleting todos
6:) There should be a button for toggling todos

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
// 					console.log('( ) ', this.todos[i].todoText);
// 				} else {
// 					console.log('(x) ', this.todos[i].todoText);
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
// 	},
// 	toggleAll: function() {
// 		//completedTodos = totalTodos
// 		var totalTodos = this.todos.length;
// 		var completedTodos = 0;

// 		//get total number of comppleted todos
// 		for (var i = 0; i < totalTodos; i++) {
// 			if (this.todos[i].completed === true) {
// 				completedTodos++;
// 			}
// 		}

// 		//if everything is true, make everything false
// 		for (var i = 0; i < totalTodos; i++) {
// 			if (completedTodos === totalTodos) {
// 				this.todos[i].completed = false;
// 			} else {
// 				this.todos[i].completed = true;
// 			}
// 		}

// 		todoList.displayTodos();
// 	}
// };

// //Setting new object that handles DOM elements

// var handlers = {
// 	displayTodos: function() {
// 		todoList.displayTodos();
// 	},
// 	toggleAll: function() {
// 		todoList.toggleAll();
// 	},
// 	addTodo: function() {
// 		var todoTextInput = document.getElementById('todoTextInput');
// 		todoList.addTodo(todoTextInput.value);
// 		todoTextInput.value = '';
// 	},
// 	changeTodo: function() {
// 		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
// 		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
// 		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
// 		changeTodoPositionInput.value = '';
// 		changeTodoTextInput.value = '';
// 	},
// 	deleteTodo: function() {
// 		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
// 		todoList.deleTodo(deleteTodoPositionInput.valueAsNumber);
// 		deleteTodoPositionInput.value = '';
// 	},
// 	toggleCompleted: function() {
// 		var togglePositionInput = document.getElementById('togglePositionInput');
// 		todoList.toggleCompleted(togglePositionInput.valueAsNumber);
// 		togglePositionInput.value = '';
// 	}
// };

/* ------------------------------------------------------------------------
VERSION 9 ESCAPE FROM CONSOLE
1.) There should be an element for every todo
2.) Each element should contain .todoText
3.) Each element should show .completed
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
		//this.displayTodos();
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

//Setting new object that handles DOM elements

var handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
	},
	addTodo: function() {
		var inputTodoText = document.getElementById('inputTodoText');
		todoList.addTodo(inputTodoText.value);
		inputTodoText.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
	},
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
	}
};

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');

			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};
