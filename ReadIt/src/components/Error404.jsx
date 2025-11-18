import { Link } from "react-router-dom";
import "../App.css";

function Error404() {
    return (
        <div className="error-page">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-text">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <Link to="/" className="error-btn">Go Back Home</Link>
        </div>
    );
}

export default Error404;
