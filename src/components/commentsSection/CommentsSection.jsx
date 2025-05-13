import CommentsList from "./partials/CommentsList.jsx";
import CommentForm from "./partials/CommentForm.jsx";

const CommentsSection = () => {
    return (
        <>
            <div id="comments-section">
                <CommentsList />
                <CommentForm />
            </div>
        </>
    );
};

export default CommentsSection;