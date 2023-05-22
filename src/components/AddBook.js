import React from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/book-store/thunk/addBook";
import updatedBook from "../redux/book-store/thunk/updateBook";

const AddBook = ({ setData, data, setIsUpdating, isUpdating }) => {
  const dispatch = useDispatch();
  const getFieldData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newObj = { ...data };
    newObj[key] = value;
    if (e.target.name === "featured" && e.target.checked) {
      newObj["featured"] = true;
    } else {
      newObj["featured"] = false;
    }
    setData(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating) {
      dispatch(updatedBook(data.id, data));
      setIsUpdating(false);
    } else {
      dispatch(addBook(data));
    }
    e.target.reset();
    setData({});
  };
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {isUpdating ? "Update Book" : "Add New Book"}
      </h4>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            onChange={getFieldData}
            value={data.name || ""}
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            onChange={getFieldData}
            value={data.author || ""}
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            onChange={getFieldData}
            value={data.thumbnail || ""}
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              onChange={getFieldData}
              value={data.price || ""}
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              onChange={getFieldData}
              value={data.rating || ""}
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            onChange={getFieldData}
            id="input-Bookfeatured"
            type="checkbox"
            checked={data.featured ? true : false}
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {isUpdating ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
