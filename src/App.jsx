import { useState, useEffect } from "react";

import TodoLists from "./components/TodoLists";
import AddTodoList from "./components/AddTodoList";

import "./App.css";

function App() {
  const [listObj, setListObj] = useState([]);
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
  //

  useEffect(() => {
    console.log("List 👉👉👉 updated:", listObj);
  }, [listObj]);

  function addTodoList(e, listTitle) {
    e.preventDefault();
    setListObj((currentLists) => {
      return [
        ...currentLists,
        {
          id: crypto.randomUUID(),
          listTitle,
          timeStamp: Date.now(),
          listColor: colors,
        },
      ];
    });
    console.log("newListItem", listObj);
  }

  function deleteTodoList(id) {
    setListObj((currentLists) => {
      console.log("Deleted List with id:🆔 ", id);

      return currentLists.filter((list) => list.id !== id);
    });
    console.log("Deleted List with id:", id);
    console.log("Updated listObj:", listObj);
  }

  //
  return (
    <>
      {/* <div className="app min-h-screen   flex items-center justify-center"> */}
      <div className="  shadow-lg rounded-xl p-6 space-y-6">
        <AddTodoList addTodoList={addTodoList} />
      </div>

      <div className="min-h-screen   flex flex-col items-center justify-center gap-4 p-4">
        <TodoLists
          listObj={listObj}
          key={listObj.id}
          deleteTodoList={deleteTodoList}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
