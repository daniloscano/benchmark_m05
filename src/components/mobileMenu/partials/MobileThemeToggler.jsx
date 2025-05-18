import {useContext} from "react";
import {ThemeContext} from "../../../contexts/ThemeContext.jsx";
import './mobileThemeToggler.css'

const MobileThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <button
                onClick={toggleTheme}
                className="btn rounded rounded-2 mobile-theme-btn"
            >
                {
                    theme === 'light'
                        ? 'Switch to Dark Mode'
                        : 'Switch to Light Mode'
                }
            </button>
        </>
    );
};

export default MobileThemeToggler;