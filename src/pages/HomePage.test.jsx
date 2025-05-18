import {render, screen} from '@testing-library/react'
import HomePage from "./HomePage.jsx";
import {MemoryRouter} from "react-router-dom";
import {ThemeProvider} from "../contexts/ThemeContext.jsx";
import {BooksProvider} from "../contexts/BooksContext.jsx";
import {CommentsProvider} from "../contexts/CommentsContext.jsx";
import {MobileMenuProvider} from "../contexts/MobileMenuContext.jsx";

describe('Test for Home page', () => {
    it('should not render UserComment component', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <MobileMenuProvider>
                        <BooksProvider>
                            <CommentsProvider>
                                <HomePage/>
                            </CommentsProvider>
                        </BooksProvider>
                    </MobileMenuProvider>
                </ThemeProvider>
            </MemoryRouter>)

        const userComment = screen.queryByTestId('user-comment')
        expect(userComment).not.toBeInTheDocument()
    });
})