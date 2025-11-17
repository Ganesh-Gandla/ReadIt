import BookItem from "./BookItem";

import { useSelector } from "react-redux";



function BookList() {
  const library = useSelector((state) => state.library);
  const books = library.books;

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}
export default BookList;