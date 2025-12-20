// Return the selected list that matches the selected ID
export function updateListById(lists, listId, updater) {
  return lists.map((list) => (list.id === listId ? updater(list) : list));
}

// Sorting Utilities
export function sortByAlphabetical(items, getText) {
  return [...items].sort((a, b) => getText(a).localeCompare(getText(b)));
}

export function sortByDate(items, getDate) {
  return [...items].sort((a, b) => {
    if (!getDate(a)) return 1;
    if (!getDate(b)) return -1;
    return new Date(getDate(a)) - new Date(getDate(b));
  });
}

export function countCompletedTodos(items) {
  //   return items.filter((item) => item.complete).length;
  console.log(
    "xx -> ",
    items.filter((item) => item.todos.complete == true).length
  );
}
