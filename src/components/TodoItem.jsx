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
    <>
      <li className=" p-2 flex text-sm items-center justify-between gap-4 border-b  ">
        <div className="flex items-center gap-4">
          <label>
            <input type="checkbox" onChange={() => onToggleComplete(id)} />
          </label>{" "}
          <label className={complete ? "line-through" : ""}>
            {todoItemTitle}
          </label>
        </div>
        <button
          onClick={() => deleteTodoItem(id)}
          className=" hover:bg-red-600 p-2 flex items-center justify-center border border-gray-700 text-xs rounded-md"
        >
          <Delete />
        </button>
      </li>
      <div className="text-xs flex justify-between text-gray-400 mb-4 p-2 mt-1 w-full">
        <span className="flex items-center justify-center">
          <CalendarDays className="inline-block mr-1" /> {date}
        </span>
        <span className="flex items-center justify-center">
          <ClipboardClock className="inline-block mr-1" /> {time}
        </span>
      </div>
    </>
  );
}
