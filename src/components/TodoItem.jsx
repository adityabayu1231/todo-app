function TodoItem({ todo, toggle, remove }) {
  return (
    <div
      className={`w-full max-w-2xl mx-auto mb-6 rounded-3xl shadow-lg border border-gray-200 transition hover:shadow-xl transform hover:scale-[1.01] ${
        todo.completed
          ? "bg-gradient-to-r from-gray-100 to-gray-200"
          : "bg-gradient-to-r from-white to-blue-50"
      }`}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center rounded-t-3xl">
        <h2 className="text-lg font-semibold text-blue-600">
          {todo.completed ? "Completed Task" : "Active Task"}
        </h2>
        <span className="text-xs text-gray-400">ID: {todo.id}</span>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex items-start gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
          className="w-6 h-6 mt-1 text-blue-500 focus:ring-blue-400 transition"
        />
        <div>
          <p
            className={`text-base md:text-lg font-medium transition-all duration-300 ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Click the checkbox to toggle task status.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex justify-end items-center gap-3 rounded-b-3xl">
        <button
          onClick={() => remove(todo.id)}
          className="px-4 py-2 rounded-full text-sm font-medium text-red-500 bg-red-100 hover:bg-red-500 hover:text-white transition active:scale-95 flex items-center gap-2"
        >
          <i className="fas fa-trash-alt"></i> Delete
        </button>
        <button
          onClick={() => toggle(todo.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            todo.completed
              ? "text-yellow-500 bg-yellow-100 hover:bg-yellow-500 hover:text-white"
              : "text-green-500 bg-green-100 hover:bg-green-500 hover:text-white"
          } transition active:scale-95 flex items-center gap-2`}
        >
          <i
            className={`fas ${todo.completed ? "fa-undo" : "fa-check-circle"}`}
          ></i>
          {todo.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
