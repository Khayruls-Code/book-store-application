import { combineReducers } from "redux";
import booksReducer from "./book-store/booksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
