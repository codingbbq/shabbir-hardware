import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const AboutUs = () => (
    <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Keeping Your World in Motion
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                    At Shabbir Hardware, we're dedicated to providing top-tier caster solutions that bring mobility and efficiency to your operations. As a forward-thinking startup, we're passionate about delivering products that aren't just parts, but partners in your success.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Uncompromising Quality</h3>
                    <p className="mt-2 text-base text-gray-600">
                        We source and supply only high-quality casters designed for durability and reliable performance across various industries, from healthcare to manufacturing.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Innovative Solutions</h3>
                    <p className="mt-2 text-base text-gray-600">
                        Our focus on innovation means we provide precision-engineered casters that ensure smooth, effortless movement for everything from medical trolleys to industrial equipment.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Customer-Centric Approach</h3>
                    <p className="mt-2 text-base text-gray-600">
                       Your satisfaction is our priority. We strive to be your trusted partner, helping you keep things rolling, one wheel at a time.
                    </p>
                </div>
            </div>
        </div>
    </section>
);


const HomePage = ({ onProductSelect, onNavigate }) => {
    const popularProducts = productsData.slice(0, 6);
    return (
        <div>
            <AboutUs />
            <section className="bg-gray-50 py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Most Popular Casters
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                            Discover our top-selling caster solutions, trusted by industries for their durability and performance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularProducts.map((product, index) => (
                            <ProductCard key={index} product={product} onProductSelect={onProductSelect} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button
                            onClick={() => onNavigate('products')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
                        >
                            View All Products
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
