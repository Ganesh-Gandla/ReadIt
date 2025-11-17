import BookItem from "./BookItem";
import books from "../assets/mockData";

function BookList() {
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