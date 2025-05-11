import {useContext, useEffect} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";
import BookCard from "./partials/BookCard.jsx";

const BooksGrid = () => {
    const {books, isLoading, error, selectedBook, getAllBooks} = useContext(BooksContext)

    useEffect(() => {
        getAllBooks()
    }, []);

    return (
        <>
            <section id="all-books">
                <div className="container-fluid p-3">
                    <h1>Books</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {
                            !isLoading && !error && books && (
                                books.map((book, index) => (
                                    <div
                                        key={`book-card-${index}`}
                                        className="col"
                                    >
                                        <BookCard book={book}/>
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