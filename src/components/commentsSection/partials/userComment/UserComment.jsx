import {Rating} from "primereact/rating";
import {useContext, useEffect, useRef, useState} from "react";
import {Pencil, Send, Trash} from "lucide-react";
import {CommentsContext} from "../../../../contexts/CommentsContext.jsx";
import {useParams} from "react-router-dom"
import './userComment.css';

const UserComment = ({comment}) => {
    const {getBookComments, putBookComment, deleteBookComment} = useContext(CommentsContext)
    const [onEdit, setOnEdit] = useState(false)
    const [text, setText] = useState(comment.comment)
    const [rating, setRating] = useState(comment.rate)

    const {asin} = useParams()

    const inputRef = useRef(null)

    const editHandler = async () => {
        setOnEdit(prev => !prev);

        if (onEdit) {
            await editComment();
        }
    }

    const commentChange = (e) => {
        setText(e.target.value)
    }

    const ratingChange = (e) => {
        setRating(e.target.value)
    }

    const commentPayload = () => {
        return {
            comment: text,
            rate: rating.toString(),
            elementId: asin
        }
    }

    const editComment = async () => {
        await putBookComment(comment._id, commentPayload());
        await getBookComments(asin);
    }

    const deleteHandler = async () => {
        await deleteBookComment(comment._id);
        await getBookComments(asin);
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
                                    type="text"
                                />
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
                        className="btn d-flex justify-content-center align-items-center rounded rounded-2 p-2 edit-btn"
                    >
                        {
                            !onEdit ? <Pencil size={20}/> : <Send size={20}/>
                        }
                    </button>
                    <button
                        onClick={deleteHandler}
                        className="btn d-flex justify-content-center align-items-center rounded rounded-2 p-2 delete-btn"
                    >
                        <Trash size={20}/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserComment;