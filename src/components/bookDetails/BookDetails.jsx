import {useContext, useEffect} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";
import {useParams} from "react-router-dom";
import './bookDetails.css'

const BookDetails = () => {
    const { asin } = useParams()

    const { bookDetails, getBookById } = useContext(BooksContext)

    useEffect(() => {
        getBookById(asin)
    }, []);

    return (
        <>
            <section className="pt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-3">
                            <img
                                className="img-fluid"
                                src={bookDetails.img}
                                alt={bookDetails.title}
                            />
                        </div>
                        <div className="col col-9">
                            <h1 className="book-title">{bookDetails.title}</h1>
                            <p className="fs-4 book-category">Category: {bookDetails.category}</p>
                            <p className="book-price">Price: {bookDetails.price} €</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookDetails;