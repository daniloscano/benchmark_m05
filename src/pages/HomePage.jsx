import BaseLayout from "../layouts/BaseLayout.jsx";
import BooksGrid from "../components/booksGrid/BooksGrid.jsx";
import Hero from "../components/hero/Hero.jsx";
import MobileMenu from "../components/mobileMenu/MobileMenu.jsx";

const HomePage = () => {
    return (
        <>
            <BaseLayout>
                <Hero/>
                <main>
                    <BooksGrid/>
                    <MobileMenu />
                </main>
            </BaseLayout>
        </>
    );
};

export default HomePage;