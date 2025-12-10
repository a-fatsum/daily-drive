export default function TodoItem({
  todoItemTitle,
  todoItemDueDate,
  todoItemDueTime,
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
      <div className=" bg-yellow-400 flex flex-col">
        <li>
          <label>
            <input type="checkbox" />
            {/* {listTitle} */}
          </label>{" "}
          <label>
            {todoItemTitle} - Due: {date}
          </label>
          at {time}
          <button>Delete Item</button>
        </li>
      </div>
    </>
  );
}
