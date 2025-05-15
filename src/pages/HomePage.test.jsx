import { render, screen } from '@testing-library/react'
import HomePage from "./HomePage.jsx";
import {MemoryRouter} from "react-router-dom";
import {ThemeProvider} from "../contexts/ThemeContext.jsx";
import {BooksProvider} from "../contexts/BooksContext.jsx";
import {CommentsProvider} from "../contexts/CommentsContext.jsx";

describe('Test for Home page', () => {
    it('should not render UserComment component', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <BooksProvider>
                        <CommentsProvider>
                            <HomePage />
                        </CommentsProvider>
                    </BooksProvider>
                </ThemeProvider>
            </MemoryRouter>)

        const userComment = screen.queryByTestId('user-comment')
        expect(userComment).not.toBeInTheDocument()
    });
})