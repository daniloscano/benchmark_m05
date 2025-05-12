import {createContext, useState} from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [ books, setBooks ] = useState([])
    const [ bookDetails, setBookDetails ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ query, setQuery ] = useState('')

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
        }, 600)
    }

    const getAllBooks = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_BOOKS_ENDPOINT}`)
            const data = await response.json()
            setBooks(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    const getBookById = async (bookId) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_BOOKS_ENDPOINT}/${bookId}`)
            const data = await response.json()
            setBookDetails(data[0])
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
                bookDetails, getBookById,
                isLoading,
                error,
                query, onSearchChange, searchHandler
            }
        }>
            { children }
        </BooksContext.Provider>
    )
}