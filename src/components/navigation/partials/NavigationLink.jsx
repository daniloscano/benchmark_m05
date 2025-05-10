import {Link, useLocation} from "react-router-dom";
import './navigationLink.css'

const NavigationLink = ({ link }) => {

    return (
        <>
            <Link
                to={link.link}
            >
                {link.section}
            </Link>
        </>
    );
};

export default NavigationLink;