import './mobileMenu.css'
import {Sidebar} from "primereact/sidebar";
import {navLinks} from "../navigationLink/navLinks.js";
import NavigationLink from "../navigationLink/NavigationLink.jsx";
import MobileThemeToggler from "./partials/MobileThemeToggler.jsx";
import {useContext} from "react";
import {MobileMenuContext} from "../../contexts/MobileMenuContext.jsx";

const MobileMenu = () => {
    const {isMenuVisible, mobileMenuToggler} = useContext(MobileMenuContext)

    return (
        <>

            <Sidebar
                visible={isMenuVisible}
                position="top"
                onHide={mobileMenuToggler}
                fullScreen={true}
            >
                <div className="d-flex flex-column justify-content-center align-items-center gap-5 mobile-menu">
                    <div className="d-flex flex-column align-items-center gap-4 navigation-links">
                        {
                            navLinks.map((link, index) => (
                                <NavigationLink
                                    key={`navigation-link-${index}`}
                                    link={link}
                                />
                            ))
                        }
                    </div>
                    <MobileThemeToggler/>
                </div>
            </Sidebar>
        </>
    );
};

export default MobileMenu;