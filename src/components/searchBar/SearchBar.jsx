import './searchBar.css'
import {useContext} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";

const SearchBar = () => {
    const { query, onSearchChange } = useContext(BooksContext)

    return (
        <>
            <input
                className="form-control search-input"
                name="search-input"
                placeholder="Search..."
                onChange={onSearchChange}
                value={query}
                type="text"
            />
        </>
    );
};

export default SearchBar;