import { useState, useEffect } from "react";

import TodoLists from "./components/TodoLists";
import AddTodoList from "./components/AddTodoList";
import { Plus } from "lucide-react";
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
  }

  //
  return (
    <>
      {/* <div className="app min-h-screen   flex items-center justify-center"> */}
      <div className=" p-6  space-y-6 bg-[#242423] min-w-[30%]">
        <div className="mt-8 ml-8 flex items-center  gap-4">
          <button
            htmlFor="add_new_list"
            className="border p-2 rounded-md hover:bg-green-600 flex items-center justify-center"
          >
            <Plus />
          </button>
          <label htmlFor="add_new_list">Create New List</label>
        </div>
        <hr />
        {/* <AddTodoList addTodoList={addTodoList} /> */}
        <TodoLists
          listObj={listObj}
          key={listObj.id}
          deleteTodoList={deleteTodoList}
        />
      </div>

      <div className="min-h-screen flex flex-col min-w-[70%] bg-[#333533] items-center justify-center gap-8 p-4">
        <h2>Select a list to start</h2>
        {/* <TodoLists
          listObj={listObj}
          key={listObj.id}
          deleteTodoList={deleteTodoList}
        /> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
