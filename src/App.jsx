import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => {

    return (
        <>
        <Router>
            <Routes>
                <Route index path='/' element={<Home />} />

                <Route path='/detail/:asin' element={<h1>BookDetails</h1>} />

                <Route path='*' element={<h1>404 Page not Found</h1>} />
            </Routes>
        </Router>
        </>
    )
}

export default App
