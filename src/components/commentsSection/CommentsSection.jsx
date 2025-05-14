import CommentsList from "./partials/commentsList/CommentsList.jsx";
import CommentForm from "./partials/commentForm/CommentForm.jsx";

const CommentsSection = () => {
    return (
        <>
            <div className="container w-75 mx-auto py-3 my-3" id="comments-section">
                <CommentsList />
                <CommentForm />
            </div>
        </>
    );
};

export default CommentsSection;