import Navigation from "../components/navigation/Navigation.jsx";

const BaseLayout = ({children}) => {
    return (
        <>
            <Navigation/>
            <main>
                {children}
            </main>
        </>
    );
};

export default BaseLayout;