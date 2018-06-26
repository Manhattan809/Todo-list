export function addItem(value) {
    return {
      type: "LIST_ADD",
      payload: value
    };
  }
  
  export function deleteItem(id) {
    return {
      type: "LIST_DELETE",
      payload: id
    };
  }
  
  export function editItem(id) {
    return {
      type: "LIST_EDIT",
      payload: id
    };
  }
