import {Rating} from "primereact/rating";
import {useContext, useState} from "react";
import './commentForm.css'
import {useParams} from "react-router-dom";
import {CommentsContext} from "../../../../contexts/CommentsContext.jsx";

const CommentForm = () => {
    const { asin } = useParams()
    const { getBookComments, postBookComment } = useContext(CommentsContext)
    const [ newComment, setNewComment ] = useState('')
    const [ newRating, setNewRating ] = useState('')

    const newCommentChange = (e) => {
        setNewComment(e.target.value)
    }

    const newRatingChange = (e) => {
        setNewRating(e.target.value)
    }

    const commentPayload = () => {
        return {
            comment: newComment,
            rate: newRating.toString(),
            elementId: asin
        }
    }

    const clearFormValues = () => {
        setNewComment('')
        setNewRating(0)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await postBookComment(commentPayload());

        await getBookComments(asin);

        clearFormValues();
    }

    return (
        <>
            <div className="container rounded rounded-4 mt-4 p-3 comment-form-container">
                <form
                    onSubmit={submitHandler}
                    onReset={clearFormValues}
                >
                    <input
                        className="rounded rounded-3 p-2 w-100"
                        name="new-comment-text"
                        id="new-comment-text-input"
                        placeholder="Write your comment..."
                        onChange={newCommentChange}
                        value={newComment}
                        type="text"
                    />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <Rating
                            id="new-rating-input"
                            onChange={newRatingChange}
                            value={newRating}
                            cancel={false}
                        />
                        <div className="d-flex justify-content-end align-items-center gap-3">
                            <button
                                className="btn rounded rounded-2 clear-form-btn"
                                type="reset"
                            >
                                Clear
                            </button>
                            <button
                                className="btn rounded rounded-2 add-comment-btn"
                                type="submit"
                            >
                                Add Comment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CommentForm;