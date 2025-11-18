import BookItem from "./BookItem";

function BookList({books}) {


  return (
    <div className="book-list-container">

      <div className="book-list-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))
        ) : (
          <p className="no-books">No books found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
