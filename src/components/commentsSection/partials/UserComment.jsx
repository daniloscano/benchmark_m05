import {Rating} from "primereact/rating";
import './userComment.css'
import {useEffect, useRef, useState} from "react";

const UserComment = ({comment}) => {
    const [onEdit, setOnEdit] = useState(false)
    const [text, setText] = useState(comment.comment)
    const [rating, setRating] = useState(comment.rate)

    const inputRef = useRef(null)

    const editHandler = () => {
        setOnEdit(prev => !prev)
    }

    const commentChange = (e) => {
        setText(e.target.value)
    }

    const ratingChange = (e) => {
        setRating(e.target.value)
    }

    useEffect(() => {
        if (onEdit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [onEdit]);

    return (
        <>
            <div className="row align-items-center my-2 py-2 comment-item">
                <div className="col col-2 d-flex justify-content-center">
                    <div className="comment-user">
                        {comment.author[0].toUpperCase()}
                    </div>
                </div>
                <div className="col col-8">
                    <div className="d-flex flex-column align-items-start gap-2 py-2 comment-content">
                        {
                            onEdit && (
                                <input
                                    name="comment-text"
                                    id="comment-text-input"
                                    onChange={commentChange}
                                    ref={inputRef}
                                    value={text}
                                    type="text"/>
                            )
                        }
                        {
                            !onEdit && (
                                <p className="mb-0 comment-text">
                                    {text}
                                </p>
                            )
                        }
                        <div className="d-flex justify-content-center comment-rating">
                            <Rating
                                value={rating}
                                readOnly={!onEdit}
                                onChange={ratingChange}
                                cancel={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="col col-2 d-flex justify-content-start gap-2">
                    <button
                        onClick={editHandler}
                        className="btn rounded rounded-2 edit-btn"
                    >
                        E
                    </button>
                    <button className="btn rounded rounded-2 delete-btn">
                        D
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserComment;