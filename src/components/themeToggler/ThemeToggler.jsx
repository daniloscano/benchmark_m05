import {MoonStar, Sun} from "lucide-react";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.jsx";
import './themeToggler.css'

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <button
                onClick={toggleTheme}
                className="d-none d-md-block btn rounded rounded-2 theme-btn"
            >
                {
                    theme === 'light'
                        ? <MoonStar size={24} />
                        : <Sun size={24} />
                }
            </button>
        </>
    );
};

export default ThemeToggler;