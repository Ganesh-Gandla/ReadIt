import CategoriesGrid from "./CategoriesGrid";

function Home() {
    return (
        <div className="home">
            <h2>Welcome to ReadIt</h2>
            <p>Your online library for all your reading needs.</p>
            <CategoriesGrid />
        </div>
    );
}
export default Home;