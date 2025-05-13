import {useContext, useEffect} from "react";
import {CommentsContext} from "../../../contexts/CommentsContext.jsx";
import UserComment from "./UserComment.jsx";
import {useParams} from "react-router-dom";

const CommentsList = () => {
    const {commentsList, getBookComments} = useContext(CommentsContext)
    const { asin } = useParams()

    useEffect(() => {
        getBookComments(asin)
    }, []);

    return (
        <>
            {
                commentsList && commentsList.map((comment, index) => (
                    <UserComment
                        key={`user-comment-${index}`}
                        comment={comment}
                    />
                ))
            }
        </>
    );
};

export default CommentsList;