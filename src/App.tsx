import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
//import CartPage from './pages/CartPage';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Se vuoi la pagina prodotti, importala e usa il nome corretto */}
                {/* <Route path="/prodotti" element={<ProdottiPage />} /> */}
                {/* Se invece hai ProductDetailPage o CartPage, usa quelli */}

            </Routes>
        </Router>
    );
};

export default App;
