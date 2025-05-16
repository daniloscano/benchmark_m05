import {render, screen, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {BooksProvider} from "../../contexts/BooksContext.jsx";
import SearchBar from "./SearchBar.jsx";

describe('Test for SearchBar component', () => {
    it('should mount with empty query value', () => {
        render(
            <MemoryRouter>
                <BooksProvider>
                    <SearchBar />
                </BooksProvider>
            </MemoryRouter>
        )

        const textInput = screen.getByPlaceholderText('Search...')
        expect(textInput).toHaveValue('')
    });

    it('should change query value with user searched value', () => {
        render(
            <MemoryRouter>
                <BooksProvider>
                    <SearchBar />
                </BooksProvider>
            </MemoryRouter>
        )

        const textInput = screen.getByPlaceholderText('Search...')

        fireEvent.change(textInput, {
            target: {
                value: 'user input'
            }
        })

        expect(textInput).toHaveValue('user input')
    })
})