import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Add">Add</Link></li>
            </ul>
            
            <select name="categories" id="categories">
                        <option value="">All Categories</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="History">History</option>
                    </select>
        </nav>
    );
}
export default NavBar;