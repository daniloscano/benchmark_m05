const SearchBar = () => {
    return (
        <>
            <input
                className="form-control"
                name="search-input"
                placeholder="Search..."
                onChange={() => console.log('changed')}
                value={''}
                type="text"
            />
        </>
    );
};

export default SearchBar;