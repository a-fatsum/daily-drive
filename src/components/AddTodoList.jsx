import { useState } from "react";

export default function AddTodoList({ addTodoList }) {
  const [listTitle, setListTitle] = useState("");

  function addList(e) {
    e.preventDefault();
    addTodoList(e, listTitle);
  }
  //
  // FORM
  return (
    <>
      <form onSubmit={addList}>
        <input
          type="text"
          onChange={(e) => {
            setListTitle(e.target.value);
          }}
        />
        <button>Add Todo List</button>
      </form>
    </>
  );
}
