import './notFound.css'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="container-fluid not-found-container">
                <div
                    className="row row-cols-1 row-cols-md-2 gy-4"
                >
                    <div className="col col-12 col-md-4">
                        <img
                            className="img-fluid not-found-image"
                            src="https://media.tenor.com/rVe1UKTKhokAAAAi/what-huh.gif"
                            alt=""
                        />
                    </div>
                    <div className="col col-12 col-md-8 text-center">
                        <h1>Hey, where did you go?</h1>
                        <p
                            className="fw-bold"
                        >
                            We can't find you anymore...
                        </p>
                        <p
                            className="fw-bold mb-4"
                        >
                            ...or maybe it's you who can't find us
                        </p>
                        <p>
                            Anyway, follow our voice, click on the button below and come back with us!
                        </p>
                        <Link to={'/'}>
                            <button
                                className="btn rounded rounded-2 back-home-btn"
                            >
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;