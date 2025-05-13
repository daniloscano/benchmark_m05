import {Rating} from "primereact/rating";
import './userComment.css'

const UserComment = ({comment}) => {

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
                        <p className="mb-0 comment-text">
                            {comment.comment}
                        </p>
                        <div className="d-flex justify-content-center comment-rating">
                            <Rating
                                value={comment.rate}
                                readOnly
                                cancel={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="col col-2 d-flex justify-content-start gap-2">
                    <button className="btn rounded rounded-2 edit-btn">
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