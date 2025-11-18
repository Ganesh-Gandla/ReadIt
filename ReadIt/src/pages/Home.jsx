import BookList from "../components/BookList";
import CategoriesGrid from "../components/CategoriesGrid";
import { useSelector } from "react-redux";

function Home() {
    const library = useSelector((state) => state.library);
    const books = [...library.books].sort((a, b) => b.rating - a.rating).slice(0, 10);
    return (
        <div className="home">
            <h2>Welcome to ReadIt</h2>
            <p>Your online library for all your reading needs.</p>
            <CategoriesGrid />
            <h2>Popular Books</h2>
            <p>Check out some of the most popular books among our readers!</p>
            <BookList books={books} />
        </div>
    );
}
export default Home;