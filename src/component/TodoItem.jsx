import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div className='dv1'>
      <input type="checkbox" className='check-input' checked={todo.complete} onChange={handleTodoClick} />
      <label htmlFor="">{todo.name}</label>
    </div>
  );
}

export default TodoItem;
