import './hero.css'

const Hero = () => {
    return (
        <>
            <header>
                <div
                    className="container-fluid d-flex flex-column justify-content-center align-items-center gap-3 w-50 h-100 hero-content">
                    <h1>EpiBooks</h1>
                    <p className="text-center fs-5">
                        Welcome to EpiBooks, your new literary social
                    </p>
                    <a
                        className="btn to-books-btn"
                        href="#all-books"
                    >
                        Go to Books
                    </a>
                </div>
            </header>
        </>
    )
        ;
};

export default Hero;