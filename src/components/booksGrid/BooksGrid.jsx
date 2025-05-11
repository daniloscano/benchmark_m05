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
                    <h1 className="mt-3">Books</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-4 mt-2">
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