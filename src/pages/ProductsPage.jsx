import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const ProductsPage = ({ onProductSelect }) => {
    const [products, setProducts] = useState(productsData);
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = useMemo(() => ['All', ...[...new Set(products.map(p => p.category))]], [products]);

    useEffect(() => {
        let result = products;
        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }
        if (searchTerm) {
            const lowercasedTerm = searchTerm.toLowerCase();
            result = result.filter(p => 
                p.category.toLowerCase().includes(lowercasedTerm) ||
                (p.description.material && p.description.material.toLowerCase().includes(lowercasedTerm)) ||
                (p.description.housing && p.description.housing.toLowerCase().includes(lowercasedTerm))
            );
        }
        setFilteredProducts(result);
    }, [selectedCategory, searchTerm, products]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsFilterOpen(false);
    };

    const Sidebar = ({ onCategorySelect }) => (
         <nav>
            <ul>
                {categories.map(category => (
                    <li key={category} className="mb-2">
                        <button
                            onClick={() => onCategorySelect(category)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition ${selectedCategory === category ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
    
    const FilterModal = ({ onClose, onCategorySelect }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose}>
            <div className="absolute top-0 left-0 h-full w-64 bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <Sidebar onCategorySelect={onCategorySelect} />
            </div>
        </div>
    );

    return (
        <div className="flex container mx-auto px-4 sm:px-6 lg:px-8">
            <aside className="w-64 py-8 pr-8 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto hidden lg:block">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                   <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
                   <Sidebar onCategorySelect={handleCategorySelect} />
                </div>
            </aside>
            
            <main className="flex-1 py-8">
                 <div className="mb-6 flex flex-col sm:flex-row gap-4">
                   <input
                       type="text"
                       placeholder="Search products by name, material..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                   />
                   <button onClick={() => setIsFilterOpen(true)} className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
                        Filter Categories
                   </button>
                </div>
                {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} onCategorySelect={handleCategorySelect} />}
                
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                       {filteredProducts.map((product, index) => <ProductCard key={index} product={product} onProductSelect={onProductSelect} />)}
                    </div>
                ) : (
                     <div className="text-center py-20 bg-white rounded-lg shadow-md">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
                        <p className="mt-1 text-sm text-gray-500">Try adjusting your search or category filters.</p>
                      </div>
                )}
            </main>
        </div>
    );
};

export default ProductsPage;
