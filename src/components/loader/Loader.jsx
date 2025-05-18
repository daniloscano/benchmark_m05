import './loader.css';

const Loader = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center gap-4 w-100 p-5 loader-container">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
            </div>
        </>
    );
};

export default Loader;