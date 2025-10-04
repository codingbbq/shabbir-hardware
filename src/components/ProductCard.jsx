import React from 'react';

const ProductCard = ({ product, onProductSelect }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col" onClick={() => onProductSelect(product)}>
        <div className="h-56 w-full overflow-hidden">
            <img className="w-full h-full object-contain p-4" src={product.images[0]} alt={product.category} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/f8fafc/e2e8f0?text=Image+Not+Found'; }} />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{product.category}</h3>
            <div className="mt-2 text-sm text-gray-600 h-10 overflow-hidden flex-grow">
               {product.description.material && <p><strong>Material:</strong> {product.description.material}</p>}
               {product.description.housing && <p><strong>Housing:</strong> {product.description.housing}</p>}
            </div>
             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
                View Details
            </button>
        </div>
    </div>
);

export default ProductCard;
