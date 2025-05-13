import {Rating} from "primereact/rating";
import './userComment.css'

const UserComment = ({comment}) => {

    return (
        <>
            <div className="row align-items-center">
                <div className="col col-2">
                    <div className="comment-user">
                        {comment.author[0].toUpperCase()}
                    </div>
                </div>
                <div className="col col-7">
                    <div className="d-flex flex-column align-items-start gap-2 py-2 comment-content">
                        <p className="mb-0 comment-text">
                            {comment.comment}
                        </p>
                        <div className="d-flex justify-content-center">
                            <Rating value={comment.rate} readOnly cancel={false}/>
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <button className="btn btn-outline-dark">
                        E
                    </button>
                    <button className="btn btn-danger">
                        D
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserComment;