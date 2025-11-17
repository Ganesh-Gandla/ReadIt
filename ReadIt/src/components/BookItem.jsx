function BookItem({book}) {
    return (
        <div className="book-item">
      <img src={book.coverImage} alt={book.title} className="book-cover" />

      <div className="book-details">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">By {book.author}</p>
        <p className="book-date">Published: {book.publishDate}</p>
        <p className="book-pages">{book.pages} pages</p>
        <p className="book-description">{book.description}</p>
      </div>
    </div>
    );
}
export default BookItem;