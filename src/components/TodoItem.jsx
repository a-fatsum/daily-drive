export default function TodoItem({ todoItemTitle, todoItemDueDate }) {
  return (
    <>
      <div className="todo-item">
        <li>
          <label>
            <input type="checkbox" />
            {/* {listTitle} */}
            {todoItemTitle} - Due:{" "}
            {new Date(todoItemDueDate).toLocaleDateString()}
          </label>
          <button>Delete Item</button>
        </li>
      </div>
    </>
  );
}
