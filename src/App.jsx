import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    const [page, setPage] = useState({ currentPage: 'home', selectedProduct: null });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigate = (pageName) => {
        setPage({ currentPage: pageName, selectedProduct: null });
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const handleProductSelect = (product) => {
        setPage({ currentPage: 'productDetail', selectedProduct: product });
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (page.currentPage) {
            case 'home':
                return <HomePage onProductSelect={handleProductSelect} onNavigate={handleNavigate} />;
            case 'products':
                return <ProductsPage onProductSelect={handleProductSelect} />;
            case 'productDetail':
                return <ProductDetailPage product={page.selectedProduct} onBack={() => handleNavigate('products')} />;
            default:
                return <HomePage onProductSelect={handleProductSelect} onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header 
                currentPage={page.currentPage} 
                onNavigate={handleNavigate} 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
