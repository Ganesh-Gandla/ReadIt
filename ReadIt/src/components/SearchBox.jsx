function SearchBox({value, onChange, onSearch}) {

    return (
        <div className="searchbox-wrapper">
            <input
                type="text"
                placeholder="Search books..."
                value={value}
                onChange={onChange}
                className="searchbox-input"
            />
        </div>
    );
}
export default SearchBox;