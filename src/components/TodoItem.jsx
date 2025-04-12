function TodoItem({ todo, toggle, remove }) {
  return (
    <div className="flex items-center justify-between mb-2 p-2 border rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => remove(todo.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
