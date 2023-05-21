import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};

export const updated = (id, updatedBook) => {
  return {
    type: UPDATED,
    payload: {
      id,
      updatedBook,
    },
  };
};

export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};
