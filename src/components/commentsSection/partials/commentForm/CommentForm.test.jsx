import {render, screen} from "@testing-library/react";
import CommentForm from "./CommentForm.jsx";
import {MemoryRouter} from "react-router-dom";
import {CommentsProvider} from "../../../../contexts/CommentsContext.jsx";

describe('Test for CommentForm component', () => {
    it('should mount CommentForm component', () => {
        render(
            <MemoryRouter>
                <CommentsProvider>
                    <CommentForm />
                </CommentsProvider>
            </MemoryRouter>
        )

        const commentFormElement = screen.getByTestId('comment-form')
        expect(commentFormElement).toBeInTheDocument()

        const commentFormTextInput = screen.getByPlaceholderText('Write your comment...')
        expect(commentFormTextInput).toBeInTheDocument()

        const commentFormRatingSelect = screen.getByTestId('rating-select')
        expect(commentFormRatingSelect).toBeInTheDocument()

        const commentFormClearBtn = screen.getAllByRole('button')
        expect(commentFormClearBtn[0]).toHaveTextContent('Clear')
        expect(commentFormClearBtn[1]).toHaveTextContent('Add Comment')
    });
})