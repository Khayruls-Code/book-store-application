import { deleted } from "../actions";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });
    dispatch(deleted(id));
  };
};

export default deleteBook;
