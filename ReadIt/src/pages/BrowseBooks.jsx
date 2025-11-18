import SearchBox from "../components/SearchBox";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import categoriesWithImages from "../assets/categoriesData";
import { useSelector } from "react-redux";

function BrowseBooks() {
    const library = useSelector((state) => state.library);
    const books = library.books;

    const [query, setQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(books);

    const { category } = useParams();
    const navigate = useNavigate();



    // Handle Category Change
    const handleChange = (e) => {
        const value = e.target.value;

        if (value) navigate(`/books/${value}`);
        else navigate("/books");
    };

    useEffect(() => {
        let updatedBooks = books;

        // Category Filter
        if (category) {
            updatedBooks = updatedBooks.filter(
                (book) => book.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Search Filter
        if (query.trim() !== "") {
            updatedBooks = updatedBooks.filter(
                (book) =>
                    book.title.toLowerCase().includes(query.toLowerCase()) ||
                    book.author.toLowerCase().includes(query.toLowerCase())
            );
        }

        setFilteredBooks(updatedBooks);
    }, [query, category]);

    return (
        <div className="browse-container">
            <h2 className="browse-heading">Browse Books</h2>

            {/* Controls */}
            <div className="browse-controls">
                <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />

                <select onChange={handleChange} className="category-select" value={category ?? ""}>
                    <option value="">Select Category</option>

                    {categoriesWithImages.map((cat) => (
                        <option key={cat.category} value={cat.category}>
                            {cat.category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display Books */}
            <div className="browse-results">
                {filteredBooks.length === 0 ? (
                    <p className="no-results">No books found...</p>
                ) : (
                    <BookList books={filteredBooks} />
                )}
            </div>
        </div>
    );
}

export default BrowseBooks;
