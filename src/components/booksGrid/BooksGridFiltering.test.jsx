import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import {BooksProvider} from "../../contexts/BooksContext.jsx";
import BooksGrid from "./BooksGrid.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";

describe('Test for Books Grid component', () => {

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    const mockBooks = [
        {
            title: 'First Book',
            img: 'https://img',
            category: 'category1',
            price: '1.00'
        },
        {
            title: 'Second Book',
            img: 'https://img',
            category: 'category2',
            price: '2.00'
        },
        {
            title: 'Another Second Book',
            img: 'https://img',
            category: 'category2',
            price: '2.00'
        },
        {
            title: 'Third Book',
            img: 'https://img',
            category: 'category3',
            price: '3.00'
        }
    ]

    it('should render as many book card as book objects in books', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks
        })

        render(
            <MemoryRouter>
                <BooksProvider>
                    <BooksGrid />
                </BooksProvider>
            </MemoryRouter>
        )

        await waitFor(() => {
            const bookCards = screen.getAllByTestId('book-card')
            expect(bookCards).toHaveLength(mockBooks.length)
        })
    });

    it('should change query state when user write in search bar input', () => {
        render(
            <MemoryRouter>
                <BooksProvider>
                    <SearchBar />
                </BooksProvider>
            </MemoryRouter>
        )

        const searchInput = screen.getByPlaceholderText('Search...')
        fireEvent.change(searchInput, {
            target: {
                value: 'Second'
            }
        })
        expect(searchInput.value).toBe('Second')
    });

    it('should re-run useEffect on query change and render only matching-filter books', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockBooks
        })

        render(
            <MemoryRouter>
                <BooksProvider>
                    <SearchBar />
                    <BooksGrid />
                </BooksProvider>
            </MemoryRouter>
        )

        await waitFor(() => {
            const allBooksCards = screen.getAllByTestId('book-card')
            expect(allBooksCards).toHaveLength(mockBooks.length)
        })

        const searchInput = screen.getByPlaceholderText('Search...')
        fireEvent.change(searchInput, {
            target: {
                value: 'Second'
            }
        })
        expect(searchInput.value).toBe('Second')

        const matchingBooks = mockBooks.filter(book => book.title.includes('Second'))

        await waitFor(() => {
            const matchingBooksCards = screen.getAllByTestId('book-card')
            expect(matchingBooksCards).toHaveLength(matchingBooks.length)
        })
    });
});