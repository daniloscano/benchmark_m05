import Navigation from "../components/navigation/Navigation.jsx";
import Footer from "../components/footer/Footer.jsx";

const BaseLayout = ({children}) => {
    return (
        <>
            <Navigation/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default BaseLayout;