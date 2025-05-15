import {render, screen, waitFor} from "@testing-library/react";
import BooksGrid from "./BooksGrid.jsx";
import {MemoryRouter} from "react-router-dom";
import {BooksProvider} from "../../contexts/BooksContext.jsx";

describe('Test for BooksGrid component', () => {

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it('should render the correct amount of book cards from external data source', async () => {
        const mockBooks = [
            {
                title: 'Book1',
                img: 'https://img',
                category: 'category1',
                price: '1.00'
            },
            {
                title: 'Book2',
                img: 'https://img',
                category: 'category2',
                price: '2.00'
            },
            {
                title: 'Book3',
                img: 'https://img',
                category: 'category3',
                price: '3.00'
            },
        ]

        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks
        })

        render(
            <MemoryRouter>
                <BooksProvider>
                    <BooksGrid/>
                </BooksProvider>
            </MemoryRouter>
        )

        await waitFor(() => {
            const firstBookTitle = screen.getByText('Book1')
            expect(firstBookTitle).toBeInTheDocument()

            const secondBookTitle = screen.getByText('Book2')
            expect(secondBookTitle).toBeInTheDocument()

            const thirdBookTitle = screen.getByText('Book3')
            expect(thirdBookTitle).toBeInTheDocument()
        })
    });
})