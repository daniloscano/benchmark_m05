import CommentsList from "./partials/commentsList/CommentsList.jsx";
import CommentForm from "./partials/commentForm/CommentForm.jsx";
import './commentsSection.css'

const CommentsSection = () => {
    return (
        <>
            <div className="container-fluid container-lg py-3 mt-3 comments-section">
                <CommentsList />
                <CommentForm />
            </div>
        </>
    );
};

export default CommentsSection;