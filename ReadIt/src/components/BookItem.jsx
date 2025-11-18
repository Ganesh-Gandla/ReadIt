import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} className="book-card-img" />

      <div className="book-card-body">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">By {book.author}</p>

        <p className="book-card-meta">
          📅 {book.publishDate} · 📘 {book.pages} pages
        </p>

        <p className="book-card-desc">{book.description.slice(0, 100)}...</p>

        <Link to={`/book/${book.id}`} className="book-card-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default BookItem;
