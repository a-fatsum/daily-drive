import { useState } from "react";

// ********** I used ChatGPT to help me with the select dropdown -
// Look up "react select dropdown" as basic <select> element styling is ignored in Firefox and other browsers -
//  only works in Chrome
import Select from "react-select";

export default function AddTodoList({ addTodoList }) {
  const [listTitle, setListTitle] = useState("");
  const colors = [
    "#33ff582e",
    "#ff58332d",
    "#3358ff2f",
    "#f133ff33",
    "#33fff535",
  ];

  // ********** I used ChatGPT to help me with the select dropdown -
  // Look up "react select dropdown" as basic <select> element styling is ignored in Firefox and other browsers -
  //  only works in Chrome
  const colorOptions = colors.map((c) => ({
    value: c,
    // label: "",
    color: c,
  }));
  // const customStyles = {
  //   option: (styles, { data }) => ({
  //     ...styles,
  //     backgroundColor: data.color,
  //     // Set text color
  //     color: "#fff",
  //     // Add some padding
  //     padding: 10,
  //   }),
  // };
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

    // singleValue: (styles) => ({
    //   ...styles,
    //   color: "transparent", // hide selected text
    // }),

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

        {/* <select
          name="listColor"
          id=""
          onChange={(e) => {
            setListColor(e.target.value);
          }}
        >
          {colors.map((color, i) => (
            <option style={{ backgroundColor: color }} key={i} value={color}>
              xxx
            </option>
          ))}
        </select> */}

        <Select
          options={colorOptions}
          styles={customStyles}
          onChange={(option) => setListColor(option.value)}
          isSearchable={false}
          placeholder="Select color"
        />

        <button className="hover:bg-green-600 p-2 flex items-center justify-center border rounded-md">
          Create List
        </button>
      </form>
    </>
  );
}
