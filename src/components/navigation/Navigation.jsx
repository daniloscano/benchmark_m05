import {navLinks} from "../navigationLink/navLinks.js";
import NavigationLink from "../navigationLink/NavigationLink.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";
import ThemeToggler from "../themeToggler/ThemeToggler.jsx";
import './navigation.css'
import MobileMenuToggler from "../mobileMenuToogler/MobileMenuToggler.jsx";

const Navigation = () => {

    return (
        <>
            <nav>
                <div className="container-fluid d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex align-items-center gap-4 navigation-content">
                        <div className="navigation-brand">
                            <a
                                className="text-decoration-none fs-3 fw-bold"
                                href='/'
                            >
                                EpiBooks
                            </a>
                        </div>
                        <div className="d-none d-md-flex align-items-center gap-3 navigation-links">
                            {
                                navLinks.map((link, index) => (
                                    <NavigationLink
                                        key={`navigation-link-${index}`}
                                        link={link}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 navigation-action">
                        <SearchBar/>
                        <ThemeToggler/>
                        <MobileMenuToggler />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
