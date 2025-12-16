import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

export default function SelectedTodoPanel({
  list,
  addTodo,
  deleteTodoItem,
  onToggleComplete,
}) {
  return (
    <div
      className="w-full p-4 rounded-lg max-w-2xl text-white"
      style={{ backgroundColor: list.listColor }}
    >
      <h2 className="text-3xl mb-4">{list.listTitle}</h2>

      <AddTodoItem
        addTodos={(title, dueDate, dueTime) =>
          addTodo(list.id, title, dueDate, dueTime)
        }
      />

      <ul className="mt-4 border rounded-lg bg-white text-gray-800">
        {list.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todoItemTitle={todo.title}
            todoItemDueDate={todo.dueDate}
            todoItemDueTime={todo.dueTime}
            deleteTodoItem={deleteTodoItem}
            onToggleComplete={onToggleComplete}
            complete={todo.complete}
          />
        ))}
      </ul>
    </div>
  );
}
