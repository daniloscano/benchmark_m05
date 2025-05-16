import {render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import {BooksProvider} from "../../contexts/BooksContext.jsx";
import {MemoryRouter} from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import BooksGrid from "./BooksGrid.jsx";

describe('Test for filtering in BooksGrid component', () => {

    const mockBooks = [
        {
            title: 'first book',
            img: 'https://img',
            category: 'category1',
            price: '1.00'
        },
        {
            title: 'second book',
            img: 'https://img',
            category: 'category2',
            price: '2.00'
        },
        {
            title: 'third book',
            img: 'https://img',
            category: 'category3',
            price: '3.00'
        },
    ]

    const matchingBooks = [
        {
            title: 'first book',
            img: 'https://img',
            category: 'category1',
            price: '1.00'
        }
    ]

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it('should render all book cards on mount', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks
        })

        render(
            <MemoryRouter>
                <BooksProvider>
                    <SearchBar/>
                    <BooksGrid/>
                </BooksProvider>
            </MemoryRouter>
        )

        await waitFor(() => {
            const allBookCards = screen.queryAllByTestId('book-card')
            expect(allBookCards).toHaveLength(3)
        })
    });

    it('should render only filter-matching book cards on search', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockBooks,
        });

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => matchingBooks,
        });

        render(
            <MemoryRouter>
                <BooksProvider>
                    <SearchBar/>
                    <BooksGrid/>
                </BooksProvider>
            </MemoryRouter>
        )

        await waitFor(() => {
            const allBooks = screen.queryAllByTestId('book-card')
            expect(allBooks).toHaveLength(3)
        })

        const searchInput = screen.getByPlaceholderText('Search...')

        fireEvent.change(searchInput, {
            target: {
                value: 'first'
            }
        })
        expect(searchInput).toHaveValue('first')

        await waitFor(() => {
            const matchingBooks = screen.queryAllByTestId('book-card')
            expect(matchingBooks).toHaveLength(1)

            const searchedBook = screen.getByText('first book')
            expect(searchedBook).toBeInTheDocument()
        })
    })
})