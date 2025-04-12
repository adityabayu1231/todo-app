function TodoItem({ todo, toggle, remove }) {
  return (
    <div
      className={`flex items-center justify-between mb-3 p-4 border rounded-2xl shadow-sm transition duration-300 transform hover:scale-[1.01] ${
        todo.completed ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
          className="mr-3 w-5 h-5 text-blue-500 focus:ring-blue-400 transition"
        />
        <span
          className={`text-base transition-all duration-300 ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => remove(todo.id)}
        className="text-sm text-red-500 hover:text-white hover:bg-red-500 hover:shadow-md active:scale-95 font-medium transition px-3 py-1 rounded-xl flex items-center gap-1"
      >
        <i className="fas fa-trash-alt"></i> Delete
      </button>
    </div>
  );
}

export default TodoItem;
