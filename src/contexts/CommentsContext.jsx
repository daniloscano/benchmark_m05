import {createContext, useState} from "react";

export const CommentsContext = createContext()

export const CommentsProvider = ({ children }) => {
    const [ commentsList, setCommentsList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')
    
    const getBookComments = async (bookId) => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `${import.meta.env.VITE_GET_COMMENTS_ENDPOINT}/${bookId}/comments`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${import.meta.env.API_KEY}`
                    }
                });
            const data = await response.json()
            setCommentsList(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <CommentsContext.Provider value={
            {
                commentsList, getBookComments,
                isLoading, error
            }
        }>
            { children }
        </CommentsContext.Provider>
    )
}