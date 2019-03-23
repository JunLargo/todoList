/*

VERSION 3 -Requirements
1.) It should store the todos array on an object
2.) It should have a displayTodos method
3.) It should have an addTodo method
4.) It should have a changeTodo method
5. It should have a deleTodo method

*/

/*

VERSION 4 Booleans -Requirements
1.) todoList addTodo should add objects
2.) todoList changeTodo should change the todoText property
3.) todoList toggleCompleted should flip the completed property

*/

/*

VERSION 5 Loops of Logic -Requirements
1.) displayTodos should show todoText
2.) displayTodos should tell if todos is empty
3.) displayTodos should show completed

*/

/*

VERSION 6 Thingking In Code
1.) toggleAll: If everything is true, make everything false
2.) Otherwise, make everything false

*/

/*

VERSION 7 & 8 HTML and the DOM
1.) There should be "Display Todos" button & a "Toggle All" button
2.) Clicking "Display Todos" should run todoList.displayTodos
3.) Click "Toggle All" should run todoList.toggleAll
4:) There should be a button for changing todos
5:) There shoud be a button for deleting todos
6:) There should be a button for toggling todos

*/

/* ------------------------------------------------------------------------
VERSION 9 ESCAPE FROM CONSOLE
1.) There should be an element for every todo
2.) Each element should contain .todoText
3.) Each element should show .completed
*/

/*
VERSION 10 CLICK TO DELETE
1.) There should be a way to create delete button
2.) Thre should be a delete button for each todo
3.) Each li should have an id that has a todo position
4.) Delete button should have access to the  todo
5.) Click delete should update todoList.todos and the DOM
*/

/*
VERSION 11 DESTROYING FOR LOOPS
1.) todoList.toggleAll should use forEach
2.) view.displayTodos should use forEach

*/

//-----------------------------------------------------------------------------

var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
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

		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});

		this.todos.forEach(function(todo) {
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
	}
};

var handlers = {
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
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, position) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.id = position; //version 10.3
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton()); //version 10.2
			todosUl.appendChild(todoLi);
		}, this); //the this keyword refer to the object view
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(e) {
			var elementClicked = e.target;
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();
