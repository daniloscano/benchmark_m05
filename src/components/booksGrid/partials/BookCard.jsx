import './bookCard.css'
import {useState} from "react";

const BookCard = ({ book }) => {
    const [ isHover, setIsHover ] = useState(false)

    const hoverHandler = () => {
        setIsHover(prev => !prev)
    }

    return (
        <>
            <div
                onMouseOver={hoverHandler}
                onMouseOut={hoverHandler}
                className={`book-card rounded rounded-2 ${isHover ? 'hovered' : ''}`}
            >
                <img
                    className="img-fluid"
                    src={book.img}
                    alt={book.title}
                />
                <div className="card-title px-2">
                    <p
                        className="fw-bold"
                    >
                        {book.title}
                    </p>
                </div>
                <div className="card-details px-2">
                    <small>{book.category}</small>
                    <p>{book.price} €</p>
                </div>
            </div>
        </>
    );
};

export default BookCard;