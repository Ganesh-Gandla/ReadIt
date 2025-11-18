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

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (book.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (book.author.trim().length < 3) {
      newErrors.author = "Author name must be at least 3 characters.";
    }

    if (!book.publishDate) {
      newErrors.publishDate = "Publish date is required.";
    } else {
      const selected = new Date(book.publishDate);
      const today = new Date();
      if (selected > today) {
        newErrors.publishDate = "Publish date cannot be in the future.";
      }
    }

    if (!book.pages || Number(book.pages) <= 0) {
      newErrors.pages = "Pages must be greater than 0.";
    }

    if (book.coverImage.trim() !== "") {
      const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
      if (!urlRegex.test(book.coverImage)) {
        newErrors.coverImage = "Enter a valid image URL ending with png/jpg/jpeg/gif.";
      }
    }

    if (book.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop submit if invalid

    dispatch(addBook(book));
    alert("Book added successfully!");

    // Clear form
    setBook({
      title: "",
      author: "",
      publishDate: "",
      pages: "",
      coverImage: "",
      description: "",
    });
    navigate("/books");
  };

  return (
    <div className="addbook-container">
      <h1>Add New Book</h1>

      <form className="addbook-form" onSubmit={handleSubmit}>
        
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}

        {/* Author */}
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
        />
        {errors.author && <p className="error">{errors.author}</p>}

        {/* Publish Date */}
        <input
          type="date"
          name="publishDate"
          value={book.publishDate}
          onChange={handleChange}
        />
        {errors.publishDate && <p className="error">{errors.publishDate}</p>}

        {/* Pages */}
        <input
          type="number"
          name="pages"
          placeholder="Total Pages"
          value={book.pages}
          onChange={handleChange}
        />
        {errors.pages && <p className="error">{errors.pages}</p>}

        {/* Cover Image */}
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          value={book.coverImage}
          onChange={handleChange}
        />
        {errors.coverImage && <p className="error">{errors.coverImage}</p>}

        {/* Description */}
        <textarea
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
          rows={4}
        ></textarea>
        {errors.description && <p className="error">{errors.description}</p>}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
