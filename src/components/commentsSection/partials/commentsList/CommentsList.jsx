import {useContext, useEffect} from "react";
import {CommentsContext} from "../../../../contexts/CommentsContext.jsx";
import UserComment from "../userComment/UserComment.jsx";
import {useParams} from "react-router-dom";
import './commentsList.css';
import Loader from "../../../loader/Loader.jsx";
import Error from "../../../error/Error.jsx";

const CommentsList = () => {
    const {commentsList, isLoading, error, getBookComments} = useContext(CommentsContext)
    const {asin} = useParams()

    useEffect(() => {
        getBookComments(asin)
    }, []);

    return (
        <>
            <div
                data-testid="comments-list"
                className="container comments-list-container"
            >
                {
                    isLoading && !error && commentsList.length === 0 && ( <Loader /> )
                }
                {
                    !isLoading && error && commentsList.length === 0 && ( <Error error={error} /> )
                }
                {
                    !isLoading && !error && commentsList.length === 0 && (
                        <div className="row align-items-center my-2 py-2 no-user-comments">
                            <div className="col col-12 d-flex justify-content-center align-items-center py-3">
                                <p className="m-0 comment-text">There are no comments yet. Be th first to comment this
                                    book!</p>
                            </div>
                        </div>
                    )
                }
                {
                    !isLoading && !error && commentsList.length !== 0 && commentsList.map((comment, index) => (
                        <UserComment
                            key={`user-comment-${index}`}
                            comment={comment}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default CommentsList;