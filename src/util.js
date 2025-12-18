//
// export function updateListById(list, listId, updater) {
//   return
// }
//
export function updateListById(lists, listId, updater) {
  return lists.map((list) => (list.id === listId ? updater(list) : list));
}
