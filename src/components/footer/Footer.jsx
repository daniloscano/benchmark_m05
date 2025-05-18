import './footer.css'
import {ArrowUpFromDot} from "lucide-react";

const Footer = () => {
    const goToTop = () => {
        window.scroll(0, 0);
    }

    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-3 gy-4 py-3">
                        <div className="col col-12 col-md-4 text-center text-md-start">
                            <a
                                className="text-decoration-none fs-3 fw-bold"
                                href='/'
                            >
                                EpiBooks
                            </a>
                        </div>
                        <div className="col col-12 col-md-4">
                            <p className="text-center py-2 mb-0 copyright">Copyright &#169; Danilo Scano</p>
                        </div>
                        <div className="col col-12 col-md-4 text-center text-md-end">
                            <button
                                onClick={goToTop}
                                className="btn rounded rounded-2 to-top-btn"
                            >
                                <ArrowUpFromDot size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;