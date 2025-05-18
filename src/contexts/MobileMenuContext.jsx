import {createContext, useState} from "react";

export const MobileMenuContext = createContext()

export const MobileMenuProvider = ({ children }) => {
    const [ isMenuVisible, setIsMenuVisible ] = useState(false)

    const mobileMenuToggler = () => {
        setIsMenuVisible(prev => !prev)
    }

    return (
        <MobileMenuContext.Provider value={
            {
                isMenuVisible, mobileMenuToggler
            }
        }>
            { children }
        </MobileMenuContext.Provider>
    )
}