import React from 'react';

export default function Todo({ todos, deleteToDo }) {
	const removeTodo = (id) => {
		deleteToDo(id);
	};
	const todoList = todos.length ? (
		todos.map((todo) => {
			return (
				<div className='contaniner-fluid' key={todo.id}>
					<div className='row'>
						<div className='col-10'>
							<h5 style={{ display: 'inline-block' }}>{todo.content}</h5>
						</div>
						<div className='col-2'>
							<button
								type='button'
								className='btn btn-danger'
								onClick={() => {
									removeTodo(todo.id);
								}}
							>
								-
							</button>
						</div>
					</div>
				</div>
			);
		})
	) : (
		<p>No todos left for today</p>
	);
	return <div>{todoList}</div>;
}
