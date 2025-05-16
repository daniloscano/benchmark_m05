import '@testing-library/jest-dom'

if (!window.matchMedia) {
    window.matchMedia = () => ({
        matches: false,
        addListener: () => {},    // API legacy
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
    });
}