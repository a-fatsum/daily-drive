// ********** I used ChatGPT to help me with the select dropdown -
// Look up "react select dropdown" as basic <select> element styling is ignored in Firefox and other browsers -
//  only works in Chrome
import Select from "react-select";
//
export default function DropDown({
  sortOptions,
  value,
  onChange,
  placeholder,
  styles,
}) {
  const sortSelection = sortOptions.map((selection) => ({
    value: selection.value,
    label: selection.label,
  }));

  //
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#1f1f1e",
      borderColor: state.isFocused ? "#22c55e" : "#3f3f46",
      boxShadow: state.isFocused ? "0 0 0 1px #22c55e" : "none",
      minHeight: 40,
      padding: "0 4px",
      borderRadius: 8,
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "#22c55e",
      },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#2b2b2a",
      borderRadius: 10,
      marginTop: 8,
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      overflow: "hidden",
    }),

    menuList: (base) => ({
      ...base,
      padding: 6,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#22c55e"
        : state.isFocused
        ? "#3f3f46"
        : "transparent",
      color: state.isSelected ? "#0f172a" : "#e5e7eb",
      padding: "10px 12px",
      borderRadius: 6,
      cursor: "pointer",
      transition: "background-color 0.15s ease",
      "&:active": {
        backgroundColor: "#16a34a",
      },
      fontSize: 13,
    }),

    singleValue: (base) => ({
      ...base,
      color: "#e5e7eb",
      fontSize: 13,
    }),

    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontSize: 13,
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "#22c55e" : "#9ca3af",
      transition: "transform 0.2s ease",
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
      "&:hover": {
        color: "#22c55e",
      },
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  //  Pass styles conditionally

  //
  return (
    <Select
      options={sortSelection}
      value={value}
      styles={customStyles}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      className="w-40"
      placeholder={placeholder}
    />
  );
}
