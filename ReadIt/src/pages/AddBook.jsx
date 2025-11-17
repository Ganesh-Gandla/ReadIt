import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { useDispatch } from "react-redux";
import { addBook } from "../utils/cartSlice";

function AddBook() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publishDate: "",
    pages: "",
    coverImage: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addBook(book));
    console.log("New Book Added:", book);

    alert("Book added successfully!");

    // clear form
    setBook({
      title: "",
      author: "",
      publishDate: "",
      pages: "",
      coverImage: "",
      description: "",
    });
    navigate("/");
  };

  return (
    <div className="addbook-container">
      <h1>Add New Book</h1>

      <form className="addbook-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="publishDate"
          value={book.publishDate}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pages"
          placeholder="Total Pages"
          value={book.pages}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          value={book.coverImage}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
          rows={4}
        ></textarea>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
