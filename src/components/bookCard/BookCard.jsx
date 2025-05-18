import './bookCard.css'
import {useState} from "react";
import {Link} from "react-router-dom";

const BookCard = ({book}) => {
    const [isHover, setIsHover] = useState(false)

    const hoverHandler = () => {
        setIsHover(prev => !prev)
    }

    return (
        <>
            <Link
                data-testid="link-to-details"
                to={`/detail/${book.asin}`}
            >
                <div
                    onMouseOver={hoverHandler}
                    onMouseOut={hoverHandler}
                    className={`book-card rounded rounded-2 ${isHover ? 'hovered' : ''}`}
                >
                    <img
                        className="card-image"
                        src={book.img}
                        alt={book.title}
                    />
                    <div className="d-flex flex-column justify-content-end gap-2 card-details p-2 py-4">
                        <p
                            className="fs-6 fw-bold truncate-2-lines"
                        >
                            {book.title}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0">{book.category}</p>
                            <p
                                className="text-end fw-bold m-0"
                            >
                                {book.price} €
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BookCard;