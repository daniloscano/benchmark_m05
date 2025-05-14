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
                        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`
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

    const postBookComment = async (payload) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_EDIT_COMMENTS_ENDPOINT}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`
                    },
                    body: JSON.stringify(payload)
                });
            return await response.json();
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <CommentsContext.Provider value={
            {
                commentsList, getBookComments,
                postBookComment,
                isLoading, error
            }
        }>
            { children }
        </CommentsContext.Provider>
    )
}