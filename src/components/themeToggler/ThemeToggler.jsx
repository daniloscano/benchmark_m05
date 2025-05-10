import {MoonStar} from "lucide-react";

const ThemeToggler = () => {
    return (
        <>
            <button
                className="btn rounded rounded-2 theme-btn"
            >
                <MoonStar size={24} />
            </button>
        </>
    );
};

export default ThemeToggler;