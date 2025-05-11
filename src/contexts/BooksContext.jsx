import {createContext, useState} from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [ books, setBooks ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ query, setQuery ] = useState('')
    const [ selectedBook, setSelectedBook ] = useState({})

    const onSearchChange = (e) => {
        setQuery(e.target.value)
    }

    const searchHandler = () => {
        setTimeout( () => {
            if (query === '') {
                getAllBooks()
            } else {
                const matchingBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
                setBooks(matchingBooks)
            }
        })
    }

    const selectedBookHandler = (book) => {
        setSelectedBook(book)
    }

    const getAllBooks = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://epibooks.onrender.com')
            const data = await response.json()
            setBooks(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <BooksContext.Provider value={
            {
                books, getAllBooks,
                selectedBook, selectedBookHandler,
                isLoading,
                error,
                query, onSearchChange, searchHandler
            }
        }>
            { children }
        </BooksContext.Provider>
    )
}