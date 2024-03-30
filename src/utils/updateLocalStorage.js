function updateLocalStorage(favorite,item) {
  !favorite
    ? localStorage.setItem(item.id, JSON.stringify(item))
    : localStorage.removeItem(item.id);
}

export default updateLocalStorage;
