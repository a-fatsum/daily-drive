import { Delete, ClipboardClock, CalendarDays } from "lucide-react";

export default function TodoItem({
  todoItemTitle,
  todoItemDueDate,
  todoItemDueTime,
  deleteTodoItem,
  onToggleComplete,
  complete,
  id,
}) {
  let date;
  let time;
  if (!todoItemDueDate) {
    date = "No due date set";
  } else {
    date = new Date(todoItemDueDate).toLocaleDateString();
  }

  if (!todoItemDueTime) {
    time = "No due time set";
  } else {
    time = new Date(`1970-01-01T${todoItemDueTime}Z`).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <li
      className={`group rounded-xl border border-gray-700 bg-[#2b2b2a]
                p-4 mb-3
                transition-all duration-200
                hover:shadow-md hover:border-gray-600
                ${complete ? "opacity-60" : ""}`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <input
            id={`todo-${id}`}
            type="checkbox"
            checked={complete}
            onChange={() => onToggleComplete(id)}
            className="h-4 w-4 cursor-pointer accent-green-600"
          />

          <label
            htmlFor={`todo-${id}`}
            className={`text-sm font-medium cursor-pointer
                      transition-all
                      ${
                        complete
                          ? "line-through text-gray-400"
                          : "text-gray-100"
                      }`}
          >
            {todoItemTitle}
          </label>
        </div>

        <button
          onClick={() => deleteTodoItem(id)}
          aria-label="Delete todo"
          className="flex items-center justify-center
             h-9 w-9
             rounded-lg
             border border-gray-600
             text-gray-400
             transition-all duration-200
             hover:bg-red-600 hover:text-white hover:border-red-600
             active:scale-95
             focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <Delete size={18} />
        </button>
      </div>

      {/* Meta info */}
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <CalendarDays size={14} /> {date}
        </span>
        <span className="flex items-center gap-1">
          <ClipboardClock size={14} /> {time}
        </span>
      </div>
    </li>
  );
}
