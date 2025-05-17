import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter, Routes, Route} from "react-router-dom";
import {BooksProvider} from "../../contexts/BooksContext.jsx";
import {CommentsProvider} from "../../contexts/CommentsContext.jsx";
import {ThemeProvider} from "../../contexts/ThemeContext.jsx";
import BooksGrid from "../booksGrid/BooksGrid.jsx";
import BookDetails from "./BookDetails.jsx";

describe('Test for Book Details component', () => {
    const mockBooks = [
        {
            asin: 'B01',
            title: 'First Book'
        }
    ]

    const mockBookDetails = {
        asin: 'B01',
        title: 'First Book'
    }

    const mockComments = [
        {
            elementId: 'B01',
            comment: 'First Comment'
        },
        {
            elementId: 'B01',
            comment: 'Second Comment'
        },
    ]

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn()
            .mockResolvedValueOnce({
                ok: true,
                json: async () => mockBooks
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => mockBookDetails
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => mockComments
            })
        )
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it('should render book grid, and on click above a card should unmount books grid', async () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <BooksProvider>
                        <CommentsProvider>
                            <Routes>
                                <Route path="/" element={<BooksGrid/>}/>
                                <Route path="/detail/:asin" element={<BookDetails/>}/>
                            </Routes>
                        </CommentsProvider>
                    </BooksProvider>
                </ThemeProvider>
            </MemoryRouter>
        )

        const booksGrid = screen.getByTestId('books-grid')
        expect(booksGrid).toBeInTheDocument()
        expect(screen.queryByTestId('book-details')).not.toBeInTheDocument()

        await waitFor(() => {
            const bookCards = screen.getAllByTestId('book-card')
            expect(bookCards).toHaveLength(mockBooks.length)

            const firstBook = screen.getByText('First Book')
            expect(firstBook).toBeInTheDocument()
        })

        const goToDetails = screen.getByTestId('link-to-details')
        expect(goToDetails).toBeInTheDocument()
        expect(goToDetails).toHaveAttribute('href', '/detail/B01')

        fireEvent.click(goToDetails)

        expect(booksGrid).not.toBeInTheDocument()
        const bookDetails = screen.getByTestId('book-details')
        expect(bookDetails).toBeInTheDocument()
    });


})