import {Link, useLocation} from "react-router-dom";
import './navigationLink.css'

const NavigationLink = ({ link }) => {
    const { pathname } = useLocation()

    return (
        <>
            <Link
                className={`navigation-link ${pathname === link.link ? 'active-link' : ''}`}
                to={link.link}
            >
                {link.section}
            </Link>
        </>
    );
};

export default NavigationLink;