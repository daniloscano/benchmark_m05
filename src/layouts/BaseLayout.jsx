import Navigation from "../components/navigation/Navigation.jsx";
import './baseLayout.css'

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