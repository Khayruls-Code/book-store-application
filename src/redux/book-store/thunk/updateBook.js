import { updated } from "../actions";

const updatedBook = (id, book) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const bookObj = response.json();
    dispatch(updated(id, bookObj));
  };
};

export default updatedBook;
