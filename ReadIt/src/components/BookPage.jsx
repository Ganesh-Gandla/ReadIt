import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

function BookPage() {
  const { id } = useParams();
  const library = useSelector((state) => state.library);

  const book = library.books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 className="not-found">Book not found</h2>;
  }

  return (
    <div className="book-page">
      <Link to="/books" className="back-btn">⬅ Back to Browse</Link>

      <div className="book-details">
        <img src={book.coverImage} alt={book.title} className="book-img" />

        <div className="book-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>

          <p><strong>Publish Date:</strong> {book.publishDate}</p>
          <p><strong>Pages:</strong> {book.pages}</p>

          <p><strong>Category:</strong> {book.category}</p>

          <p className="rating">
            <strong>Rating:</strong> ⭐ {book.rating}/5
          </p>

          <p className="description">
            <strong>Description:</strong> {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
