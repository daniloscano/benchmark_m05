import {useContext, useEffect} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";
import {useParams} from "react-router-dom";
import './bookDetails.css'
import CommentsSection from "../commentsSection/CommentsSection.jsx";
import Loader from "../loader/Loader.jsx";
import Error from "../error/Error.jsx";

const BookDetails = () => {
    const {asin} = useParams()

    const {bookDetails, isLoading, error, getBookById} = useContext(BooksContext)

    useEffect(() => {
        getBookById(asin);
    }, []);

    return (
        <>
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        {
                            isLoading && !error && !bookDetails && (<Loader/>)
                        }
                        {
                            !isLoading && error && !bookDetails && (<Error error={error} />)
                        }
                        {
                            !isLoading && !error && bookDetails && (
                                <>
                                    <div className="col col-3">
                                        <img
                                            className="img-fluid book-image"
                                            src={bookDetails.img}
                                            alt={bookDetails.title}
                                        />
                                    </div>
                                    <div className="col col-9 px-3">
                                        <h1 className="book-title">{bookDetails.title}</h1>
                                        <p className="fs-4 book-category">Category: {bookDetails.category}</p>
                                        <p className="book-price">Price: {bookDetails.price} €</p>
                                        <p className="book-overview">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem eveniet
                                            modi
                                            nihil officia omnis pariatur repellat sequi! A ad aperiam, architecto autem,
                                            dicta
                                            dolore eius enim et ex expedita ipsam laborum obcaecati optio quae recusandae
                                            repellat
                                            similique, tenetur veritatis?
                                        </p>
                                        <CommentsSection/>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default BookDetails;