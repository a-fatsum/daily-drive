export default function TodoItem({ todoItemTitle }) {
  return (
    <>
      <div className="todo-lista-item">
        <li>
          <label>
            <input type="checkbox" />
            {/* {listTitle} */}
            {todoItemTitle}
          </label>
          <button>Delete Item</button>
        </li>
      </div>
    </>
  );
}
