import { useState } from "react";
// import DropDown from "./DropDown";

import Select from "react-select";

export default function AddTodoList({ addTodoList, colors }) {
  const [listTitle, setListTitle] = useState("");

  const colorOptions = colors.map((c) => ({
    value: c,
    color: c,
  }));
  const customStyles = {
    control: (styles, state) => ({
      ...styles,
      // backgroundColor: state.hasValue ? state.getValue()[0].value : "white",
      backgroundColor: state.hasValue ? state.getValue()[0].value : colors[0], // default color is the first color in the list
      cursor: "pointer",
      width: 150,
      height: 40,
    }),

    option: (styles, { data }) => ({
      ...styles,
      // remove last two hex digits if present to make the color in full opacity inside the drop-down list
      backgroundColor:
        data.color.length === 9 ? data.color.slice(0, 7) : data.color,
      color: "transparent",
      marginBottom: 4, // small gap
      padding: 12,
      height: 40,
    }),

    placeholder: (styles) => ({
      ...styles,
      color: "white", // hide placeholder
    }),
  };

  const [listColor, setListColor] = useState(colors[0]);

  //  =====================================================================

  function addList(e) {
    e.preventDefault();
    if (listTitle.trim() === "") return;
    addTodoList(e, listTitle, listColor);
    setListTitle("");
  }
  //
  // FORM
  return (
    <>
      <form className="flex gap-4 text-white" onSubmit={addList}>
        <input
          className="text-gray outline-none text-gray-800 p-2 rounded-md"
          type="text"
          value={listTitle}
          onChange={(e) => {
            setListTitle(e.target.value);
          }}
        />

        <Select
          options={colorOptions}
          styles={customStyles}
          onChange={(option) => setListColor(option.value)}
          isSearchable={false}
          placeholder="Select color"
        />

        {/* STILL WORKING ON ON DropDown COMPONENT */}
        {/* <DropDown
          sortOptions={colorOptions}
          styles={customStyles}
          onChange={setListColor}
          placeholder="Select color"
        /> */}

        <button className="hover:bg-green-600 p-2 flex items-center justify-center border rounded-md">
          Create List
        </button>
      </form>
    </>
  );
}
