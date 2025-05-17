import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter, Routes, Route} from "react-router-dom";
import {BooksProvider} from "../../contexts/BooksContext.jsx";
import {CommentsProvider} from "../../contexts/CommentsContext.jsx";
import {ThemeProvider} from "../../contexts/ThemeContext.jsx";
import BooksGrid from "../booksGrid/BooksGrid.jsx";
import BookDetails from "./BookDetails.jsx";
import DetailPage from "../../pages/DetailPage.jsx";

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
            comment: 'First Comment',
            rate: 4,
            _id: 'comment1',
            author: 'John'
        },
        {
            elementId: 'B01',
            comment: 'Second Comment',
            rate: 5,
            _id: 'comment2',
            author: 'Alice'
        },
    ];

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it('should render book grid, and on click above a card should unmount books grid', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockBooks
        })

        render(
            <MemoryRouter initialEntries={["/"]}>
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

    it('should render comment section component with comment info from url param', async () => {
        fetch.mockImplementation((url) => {
            if (url.endsWith('/comments')) {
                return Promise.resolve({
                    ok: true,
                    json: async () => mockComments
                });
            }

            return Promise.resolve({
                ok: true,
                json: async () => [mockBookDetails]
            });
        });

        render(
            <MemoryRouter initialEntries={["/detail/B01"]}>
                <ThemeProvider>
                    <BooksProvider>
                        <CommentsProvider>
                            <Routes>
                                <Route path="/detail/:asin" element={<BookDetails/>}/>
                            </Routes>
                        </CommentsProvider>
                    </BooksProvider>
                </ThemeProvider>
            </MemoryRouter>
        )

        const bookDetails = await screen.findByTestId('book-details');
        expect(bookDetails).toBeInTheDocument();

        const title = await screen.findByText(mockBookDetails.title);
        expect(title).toBeInTheDocument();

        const userComments = await screen.findAllByTestId('user-comment')
        expect(userComments).toHaveLength(2)
        expect(userComments[0]).toHaveTextContent('First Comment')
        expect(userComments[1]).toHaveTextContent('Second Comment')
    })
})