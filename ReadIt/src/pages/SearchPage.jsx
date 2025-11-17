import SearchBox from "../components/SearchBox";
import { useState } from "react";
import books from "../assets/mockData";
import BookItem from "../components/BookItem";

function SearchPage() {

    const [query, setQuery] = useState("");

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-container">
            <h2 className="search-heading">Search Books</h2>

            <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />

            <div className="results-section">
                {filteredBooks.length === 0 ? (
                    <p className="no-results">No books found...</p>
                ) : (
                    filteredBooks.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))
                )}
            </div>
        </div>
    );
}
export default SearchPage;