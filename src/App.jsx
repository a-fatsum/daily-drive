import { useState, useEffect } from "react";

import TodoLists from "./components/TodoLists";
import AddTodoList from "./components/AddTodoList";
import SelectedTodoPanel from "./components/SelectedTodoPanel";
import { Plus, ArrowLeft } from "lucide-react";
import { Modal, Box } from "@mui/material";
import "./App.css";

function App() {
  const [listObj, setListObj] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    console.log("List 👉👉👉 updated:", listObj);
  }, [listObj]);

  function addTodoList(e, listTitle, listColor) {
    e.preventDefault();
    setListObj((currentLists) => {
      return [
        ...currentLists,
        {
          id: crypto.randomUUID(),
          listTitle,
          timeStamp: Date.now(),
          listColor,
          todos: [],
        },
      ];
    });
    console.log("newListItem", listObj);
  }

  // function addTodoItemToList(listId, title, dueDate, dueTime) {
  //   setListObj((lists) =>
  //     lists.map((list) =>
  //       list.id === listId
  //         ? {
  //             ...list,
  //             todos: [
  //               ...list.todos,
  //               {
  //                 id: crypto.randomUUID(),
  //                 title,
  //                 dueDate,
  //                 dueTime,
  //                 complete: false,
  //               },
  //             ],
  //           }
  //         : list
  //     )
  //   );
  // }

  // Simplified version of the above function
  function addTodoItemToList(listId, title, dueDate, dueTime) {
    setListObj((lists) => {
      return lists.map((list) => {
        if (list.id !== listId) {
          return list; // not the right list → do nothing
        }

        // this IS the list we want
        return {
          ...list,
          todos: [
            ...list.todos,
            {
              id: crypto.randomUUID(),
              title,
              dueDate,
              dueTime,
              complete: false,
            },
          ],
        };
      });
    });
  }

  // Handle Delete
  function deleteTodoList(id) {
    setListObj((currentLists) => {
      console.log("Deleted List with id:🆔 ", id);

      return currentLists.filter((list) => list.id !== id);
    });
  }

  // Conditional redner AddTodoList
  const [showAddTodoList, setShowAddTodoList] = useState(false);
  function renderAddTodoList() {
    setShowAddTodoList(true);
  }

  const handleClose = () => {
    setShowAddTodoList(false);
  };
  //

  const selectedList = listObj.find((list) => list.id === selectedListId);

  return (
    <>
      <div className=" p-6  space-y-6 bg-[#242423] min-w-[30%]">
        <div className="mt-8 ml-8 flex items-center  gap-4">
          <button
            htmlFor="add_new_list"
            className="border p-2 rounded-md hover:bg-green-600 flex items-center justify-center"
            onClick={renderAddTodoList}
          >
            <Plus />
          </button>
          <label htmlFor="add_new_list">Create New List</label>
        </div>

        <hr />

        {/* RENDER WITHOUT POP-UP =>>>> {showAddTodoList && <AddTodoList addTodoList={addTodoList} />} */}

        {/* Pop up */}
        <div>
          <Modal open={showAddTodoList} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#333533",
                boxShadow: 24,
                p: 3,
                borderRadius: 2,
                minWidth: 350,
              }}
            >
              <AddTodoList
                addTodoList={addTodoList}
                // onClose={handleClose}
              />
            </Box>
          </Modal>
        </div>

        <TodoLists
          listObj={listObj}
          key={listObj.id}
          deleteTodoList={deleteTodoList}
          selectedListId={selectedListId}
          onSelect={setSelectedListId}
        />
      </div>

      <div className="min-h-screen flex flex-col min-w-[70%] bg-[#333533] items-center justify-center gap-8 p-4">
        {!selectedList ? (
          <div className="flex gap-4 items-center">
            <ArrowLeft size={32} />
            <h2 className="text-4xl font-thin">Select a list to start</h2>
          </div>
        ) : (
          <SelectedTodoPanel list={selectedList} addTodo={addTodoItemToList} />
        )}
      </div>
    </>
  );
}

export default App;
