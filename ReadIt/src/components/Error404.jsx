import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import "../App.css";

function Error404() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-text">
                {error.data || "The page you are looking for does not exist."}
            </p>

            <Link to="/" className="error-btn">Go Back Home</Link>
        </div>
    );
}

export default Error404;
