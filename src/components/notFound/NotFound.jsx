import './notFound.css'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="container-fluid not-found-container">
                <div
                    className="container d-flex flex-column justify-content-center align-items-center not-found-content">
                    <h1>Hey, where did you go?</h1>
                    <p
                        className="fs-4 fw-bold"
                    >
                        We can't find you anymore...
                    </p>
                    <p
                        className="fs-4 fw-bold mb-4"
                    >
                        ...or maybe it's you who can't find us
                    </p>
                    <p
                        className="fs-5"
                    >
                        Anyway, follow our voice, click on the button below and come back with us!
                    </p>
                    <Link to={'/'}>
                        <button
                            className="btn rounded rounded-2 fs-5 back-home-btn"
                        >
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;