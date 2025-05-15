import {render, screen} from "@testing-library/react";
import Hero from "./Hero.jsx";

describe('Test for Hero component', () => {
    it('should mount Hero component', () => {
        render(<Hero />)

        const heroElement = screen.getByTestId('hero-content')
        expect(heroElement).toBeInTheDocument()

        const heroTitle = screen.getByText('EpiBooks')
        expect(heroTitle).toBeInTheDocument()

        const heroSubtitle = screen.getByText('Welcome to EpiBooks, your new literary social')
        expect(heroSubtitle).toBeInTheDocument()

        const heroAnchor = screen.getByText('Go to Books')
        expect(heroAnchor).toBeInTheDocument()
    })
})