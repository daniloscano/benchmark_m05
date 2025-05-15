import {createContext, useState} from "react";

export const CommentsContext = createContext()

export const CommentsProvider = ({ children }) => {
    const [ commentsList, setCommentsList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ success, setSuccess ] = useState({})
    const [ fail, setFail ] = useState({})
    
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
            setSuccess(
                {
                    type: 'success',
                    summary: 'Comment Added!',
                    message: 'Your comment has been successfully added'
                }
            )
            return await response.json();
        } catch (e) {
            setFail(
                {
                    type: 'danger',
                    summary: 'Error',
                    message: 'Something went wrong. Try again later...'
                }
            )
        }
    }

    const putBookComment = async (commentId, payload) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_EDIT_COMMENTS_ENDPOINT}/${commentId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`
                    },
                    body: JSON.stringify(payload)
                });
            setSuccess(
                {
                    type: 'success',
                    summary: 'Comment Updated!',
                    message: 'Your comment has been successfully updated'
                }
            )
            return await response.json();
        } catch (e) {
            setFail(
                {
                    type: 'danger',
                    summary: 'Error',
                    message: 'Something went wrong. Try again later...'
                }
            )
        }
    }

    const deleteBookComment = async (commentId) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_EDIT_COMMENTS_ENDPOINT}/${commentId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`
                    }
                });
            setSuccess(
                {
                    type: 'success',
                    summary: 'Comment Deleted!',
                    message: 'Your comment has been successfully deleted'
                }
            )
            return await response.json();
        } catch (e) {
            setFail(
                {
                    type: 'danger',
                    summary: 'Error',
                    message: 'Something went wrong. Try again later...'
                }
            )
        }
    }

    return (
        <CommentsContext.Provider value={
            {
                commentsList, getBookComments,
                postBookComment, putBookComment, deleteBookComment,
                isLoading, error,
                success, fail
            }
        }>
            { children }
        </CommentsContext.Provider>
    )
}