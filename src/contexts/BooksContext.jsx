import {createContext, useState} from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [ books, setBooks ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ query, setQuery ] = useState('')

    const onSearchChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <BooksContext.Provider value={
            {
                books, isLoading, error, query, onSearchChange
            }
        }>
            { children }
        </BooksContext.Provider>
    )
}