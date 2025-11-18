function About() {
    return (
        <div className="about-page">
            <h1 className="about-title">About Our Library</h1>

            <p className="about-description">
                Welcome to our Online Library! Browse, search, and explore a wide
                collection of books across multiple genres. This project is built
                to help users discover books easily with features like search,
                filters, and detailed book descriptions.
            </p>

            <h2 className="section-title">Features</h2>
            <ul className="list">
                <li className="list-item">Search books by title or author</li>
                <li className="list-item">View detailed information about each book</li>
                <li className="list-item">Modern clean UI</li>
                <li className="list-item">Responsive design</li>
            </ul>

            <h2 className="section-title">Tech Stack</h2>
            <ul className="list">
                <li className="list-item">React.js</li>
                <li className="list-item">CSS Modules / Plain CSS</li>
                <li className="list-item">Vite</li>
            </ul>
        </div>
    );
}

export default About;
