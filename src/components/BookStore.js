import React, { useEffect, useState } from "react";
import Book from "./Book";
import AddBook from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import fetchBook from "../redux/book-store/thunk/fetchBooks";

const BookStore = () => {
  const [data, setData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <div className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button className="filter-btn active-filter" id="lws-filterAll">
                All
              </button>
              <button className="filter-btn" id="lws-filterFeatured">
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                setData={setData}
                setIsUpdating={setIsUpdating}
              />
            ))}
          </div>
        </div>
        <div>
          <AddBook
            setData={setData}
            data={data}
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
          />
        </div>
      </div>
    </div>
  );
};

export default BookStore;
