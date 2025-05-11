import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {PrimeReactProvider} from "primereact/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {ThemeProvider} from "./contexts/ThemeContext.jsx";
import {BooksProvider} from "./contexts/BooksContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrimeReactProvider>
            <ThemeProvider>
                <BooksProvider>
                    <App/>
                </BooksProvider>
            </ThemeProvider>
        </PrimeReactProvider>
    </StrictMode>,
)
