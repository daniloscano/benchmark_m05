import {useContext, useEffect} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";
import BookCard from "../bookCard/BookCard.jsx";
import './booksGrid.css'
import Loader from "../loader/Loader.jsx";
import Error from "../error/Error.jsx";

const BooksGrid = () => {
    const {books, isLoading, error, query, searchHandler} = useContext(BooksContext)

    useEffect(() => {
        searchHandler()

        return () => {
            clearTimeout(searchHandler)
        }
    }, [query]);

    return (
        <>
            <section
                data-testid="books-grid"
                className="pt-5"
                id="all-books"
            >
                <div className="container p-3">
                    <h1 className="mt-3 section-title">Books</h1>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4 mt-2">
                        {
                            isLoading && !error && books.length === 0 && (<Loader/>)
                        }
                        {
                            !isLoading && error && books.length === 0 && (<Error error={error}/>)
                        }
                        {
                            !isLoading && !error && books.length !== 0 && (
                                books.map((book, index) => (
                                    <div
                                        data-testid="book-card"
                                        key={`book-card-${index}`}
                                        className="col"
                                    >
                                        <BookCard
                                            book={book}
                                        />
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default BooksGrid;