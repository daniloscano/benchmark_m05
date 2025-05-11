import {useContext} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";

const BookDetails = () => {
    {/* TODO -replace selectedBook with API request */}
    const {selectedBook} = useContext(BooksContext)

    return (
        <>
            <section className="mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-4">
                            <img
                                className="img-fluid"
                                src={selectedBook.img}
                                alt={selectedBook.title}
                            />
                        </div>
                        <div className="col col-8">
                            <h1>{selectedBook.title}</h1>
                            <p>{selectedBook.category}</p>
                            <p>{selectedBook.price}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookDetails;