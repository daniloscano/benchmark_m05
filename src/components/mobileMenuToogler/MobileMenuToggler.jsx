import './mobileMenuToggler.css'
import {Menu} from "lucide-react";
import {MobileMenuContext} from "../../contexts/MobileMenuContext.jsx";
import {useContext} from "react";

const MobileMenuToggler = () => {
    const { mobileMenuToggler } = useContext(MobileMenuContext)

    return (
        <>
            <button
                onClick={mobileMenuToggler}
                className="d-block d-md-none btn rounded rounded-2 mobile-menu-btn"
            >
                <Menu size={24} />
            </button>
        </>
    );
};

export default MobileMenuToggler;