import CommentsList from "./partials/CommentsList.jsx";
import CommentForm from "./partials/CommentForm.jsx";

const CommentsSection = () => {
    return (
        <>
            <div className="container w-75 mx-auto pt-3 mt-3" id="comments-section">
                <CommentsList />
                <CommentForm />
            </div>
        </>
    );
};

export default CommentsSection;