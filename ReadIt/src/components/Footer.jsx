import { Link } from "react-router-dom";
import "../App.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Left Section */}
                <div className="footer-section">
                    <h3 className="footer-logo">ReadIt</h3>
                    <p>Your online library for all your reading needs.</p>
                </div>

                {/* Middle Navigation */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/add">Add Book</Link></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: support@readit.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>
            </div>

            <p className="footer-bottom">
                © {new Date().getFullYear()} ReadIt — All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
