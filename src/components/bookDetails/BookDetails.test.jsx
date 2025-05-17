import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter, Routes, Route} from "react-router-dom";
import {BooksProvider} from "../../contexts/BooksContext.jsx";
import BooksGrid from "../booksGrid/BooksGrid.jsx";
import DetailPage from "../../pages/DetailPage.jsx";
import {CommentsProvider} from "../../contexts/CommentsContext.jsx";

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

    it('should render book details, comments list and comments components on click above a card', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <BooksProvider>

                    <Routes>
                        <Route path="/" element={<BooksGrid/>}/>
                        <Route path="/detail/:asin" element={
                            <CommentsProvider>
                                <DetailPage/>
                            </CommentsProvider>
                        }/>
                    </Routes>

                </BooksProvider>
            </MemoryRouter>
        )


        await waitFor(() => {
            const bookCards = screen.getAllByTestId('book-card')
            expect(bookCards).toHaveLength(mockBooks.length)

            fireEvent.click(bookCards[0])
        })

        /* const bookCards = screen.getAllByTestId('book-card') */


        await waitFor(() => {
            const bookDetails = screen.getByText(mockBooks[0].title)
            expect(bookDetails).toBeInTheDocument()
        })

        await waitFor(() => {
            const firstComment = screen.getByText('First Comment')
            expect(firstComment).toBeInTheDocument()
        })

    })
})