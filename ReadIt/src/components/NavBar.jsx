import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Add">Add</Link></li>
            </ul>

            <h4 className="nav-title">ReadIt</h4>

            
        </nav>
    );
}
export default NavBar;
