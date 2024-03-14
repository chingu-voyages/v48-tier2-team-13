function updateLocalStorage(favorite, id, name) {
  !favorite
    ? localStorage.setItem(id, JSON.stringify(name))
    : localStorage.removeItem(id);
}

export default updateLocalStorage;
