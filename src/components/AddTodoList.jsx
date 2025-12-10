import { useState } from "react";

export default function AddTodoList({ addTodoList }) {
  const [listTitle, setListTitle] = useState("");
  const colors = [
    "#ff58332d",
    "#33ff582e",
    "#3358ff2f",
    "#f133ff33",
    "#33fff535",
  ];
  const [listColor, setListColor] = useState(colors[0]);

  function addList(e) {
    e.preventDefault();
    if (listTitle.trim() === "") return;
    addTodoList(e, listTitle, listColor);
  }
  //
  // FORM
  return (
    <>
      <form className="flex gap-4 text-white" onSubmit={addList}>
        <input
          className="text-gray outline-none text-gray-800 p-2 rounded-md"
          type="text"
          onChange={(e) => {
            setListTitle(e.target.value);
          }}
        />

        <select
          name="listColor"
          id=""
          onChange={(e) => {
            setListColor(e.target.value);
          }}
        >
          {colors.map((color, i) => (
            <option style={{ backgroundColor: color }} key={i} value={color}>
              {/* {color} */} xxx
            </option>
          ))}
        </select>

        <button>Create List</button>
      </form>
    </>
  );
}
