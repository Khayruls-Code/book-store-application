import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";
import { initialState } from "./initialState";

const uniqueId = (state) => {
  const maxId = state.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case ADDED:
      return [...state, { ...action.payload, id: uniqueId(state) }];
    case UPDATED:
      const { id, updatedBook } = action.payload;
      return state.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            ...updatedBook,
          };
        }
        return book;
      });
    case DELETED:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
