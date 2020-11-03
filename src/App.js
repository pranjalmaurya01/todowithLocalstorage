import { useState, useEffect } from 'react';
import Todo from './component/Todo';
function App() {
	useEffect(() => {
		let localtodos = localStorage.getItem('todos');
		console.log(localtodos);
		if (localtodos !== null) {
			let to = localtodos.split(',');
			to.shift();
			console.log(to);
			let oh = [];
			to.map((z, index) => {
				oh.push({ id: index, content: z });
			});
			settodos(oh);
		}
	}, []);

	const [newtodo, setnewtodo] = useState({
		id: null,
		content: '',
	});
	const [todos, settodos] = useState([
		// {
		// 	id: 1,
		// 	content: 'code up a todo app using functional components',
		// },
		// {
		// 	id: 2,
		// 	content: 'code up a todo app using class components',
		// },
	]);
	const deleteToDo = (id) => {
		const todo = todos.filter((todo) => {
			return todo.id !== id;
		});
		settodos(todo);
		localStorage.setItem('todos', todo);
	};

	const addTodo = (todo) => {
		if (todo.content.length) {
			const todooo = [...todos, todo];
			let x = '';
			todooo.map((todo) => {
				x = x + ',' + todo.content;
			});
			console.log(x);
			localStorage.setItem('todos', x);
			settodos(todooo);
			setnewtodo({
				id: null,
				content: '',
			});
		} else {
			alert('fill then submit');
		}
	};
	return (
		<>
			<h1 className='text-center text-primary mb-3 mt-5'>Todo App</h1>
			<div className='container input-group mb-3'>
				<input
					type='text'
					onChange={(e) => {
						setnewtodo({
							id: todos.length,
							content: e.target.value,
						});
					}}
					className='text-center form-control'
					placeholder='Write a todo here'
					aria-label="Recipient's username"
					aria-describedby='button-addon2'
					value={newtodo.content}
				/>
				<div className='input-group-append'>
					<button
						className='btn btn-outline-primary'
						type='button'
						id='button-addon2'
						onClick={() => addTodo(newtodo)}
					>
						Add TODO
					</button>
				</div>
			</div>
			<div className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
				<Todo todos={todos} deleteToDo={deleteToDo} />
			</div>
		</>
	);
}

export default App;
