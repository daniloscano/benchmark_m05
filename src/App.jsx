import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import NotFound from "./components/notFound/NotFound.jsx";

const App = () => {

    return (
        <>
        <Router>
            <Routes>
                <Route index path='/' element={<HomePage />} />

                <Route path='/detail/:asin' element={<DetailPage />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
        </>
    )
}

export default App
