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
    }, [ query ]);

    return (
        <>
            <section className="pt-5" id="all-books">
                <div className="container p-3">
                    <h1 className="mt-3 section-title">Books</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-4 mt-2">
                        {
                            isLoading && !error && !books && ( <Loader />)
                        }
                        {
                            !isLoading && error && !books && ( <Error error={error} /> )
                        }
                        {
                            !isLoading && !error && books && (
                                books.map((book, index) => (
                                    <div
                                        key={`book-card-${index}`}
                                        className="col"
                                    >
                                        <BookCard
                                            data-testid="book-card"
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