import BaseLayout from "../layouts/BaseLayout.jsx";
import BooksGrid from "../components/booksGrid/BooksGrid.jsx";
import Hero from "../components/hero/Hero.jsx";

const HomePage = () => {
    return (
        <>
            <BaseLayout>
                <Hero/>
                <main>
                    <BooksGrid/>
                </main>
            </BaseLayout>
        </>
    );
};

export default HomePage;