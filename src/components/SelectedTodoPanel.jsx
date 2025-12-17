import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

export default function SelectedTodoPanel({
  list,
  addTodo,
  deleteTodoItem,
  onToggleComplete,
  sortTodos,
  sortOptions,
  sortedTodos,
}) {
  return (
    <div
      className="w-full p-4 rounded-lg max-w-2xl text-white"
      //   style={{ backgroundColor: list.listColor }}
      style={{ backgroundColor: list.listColor }}
    >
      {/* <h2 className="text-3xl mb-4">{list.listTitle}</h2> */}
      <h2 className="text-3xl font-bold mb-4">{list.listTitle}</h2>

      <AddTodoItem
        // Clarify the way these props are passed up
        addTodos={(title, dueDate, dueTime) =>
          //   addTodo(list.id, title, dueDate, dueTime)
          addTodo(list.id, title, dueDate, dueTime)
        }
        sortTodos={sortTodos}
        sortOptions={sortOptions}
      />

      <ul className="mt-4   text-gray-800">
        {/* {list.todos.map((todo) => ( */}
        {sortedTodos.map((todo) => (
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
