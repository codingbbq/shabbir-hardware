import React, { useState, useEffect } from 'react';

// Helper function to extract a clean name from an image URL
const getImageName = (url) => {
	if (!url) return 'Image';
	try {
		// Example URL: https://i.imgur.com/W0008XXXA.png -> W0008XXXA
		const fileName = url.substring(url.lastIndexOf('/') + 1);
		const nameWithoutExt = fileName.split('.')[0];
		return nameWithoutExt;
	} catch (error) {
		console.error('Could not parse image name from URL:', url, error);
		return 'Image'; // Fallback name
	}
};

const ProductDetailPage = ({ product, onBack }) => {
	const [mainImage, setMainImage] = useState(product.images[0]);
	const tableHeaders = product.variants.length > 0 ? Object.keys(product.variants[0]) : [];

	useEffect(() => {
		setMainImage(product.images[0]);
	}, [product]);

	if (!product) return null;

	return (
		<div className='container mx-auto p-4 sm:p-6 lg:p-8'>
			<button
				onClick={onBack}
				className='mb-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
						clipRule='evenodd'
					/>
				</svg>
				Back to Products
			</button>
			<div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
				<div className='p-4 sm:p-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<div>
							<div className='relative bg-gray-100 rounded-lg h-80 sm:h-96 flex items-center justify-center overflow-hidden mb-4'>
								<img
									src={mainImage}
									alt='Main product'
									className='max-h-full max-w-full object-contain'
									onError={(e) => {
										e.target.onerror = null;
										e.target.src =
											'https://placehold.co/600x600/f8fafc/e2e8f0?text=Image+Not+Found';
									}}
								/>
								<div className='absolute top-2 right-2 bg-black bg-opacity-60 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm'>
									{getImageName(mainImage)}
								</div>
							</div>
							{product.images.length > 1 && (
								<div className='flex space-x-4 overflow-x-auto pb-2'>
									{product.images.map((img, idx) => (
										<div
											key={idx}
											className={`relative flex-shrink-0 w-28 h-28 rounded-md cursor-pointer border-2 ${
												mainImage === img
													? 'border-blue-500'
													: 'border-transparent'
											} overflow-hidden transition-all`}
											onClick={() => setMainImage(img)}
										>
											<img
												src={img}
												alt={`Thumbnail ${idx + 1}`}
												className='w-full h-full object-contain p-1 bg-gray-50'
												onError={(e) => {
													e.target.onerror = null;
													e.target.src =
														'https://placehold.co/100x100/f8fafc/e2e8f0?text=Error';
												}}
											/>
											<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs font-bold text-center py-1 backdrop-blur-sm'>
												{getImageName(img)}
											</div>
										</div>
									))}
								</div>
							)}
						</div>
						<div className='space-y-6'>
							<h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>
								{product.category}
							</h1>
							<div>
								<h3 className='font-semibold text-gray-700 text-lg'>Description</h3>
								<div className='mt-2 text-base text-gray-600 space-y-2'>
									{product.description.material && (
										<p>
											<strong className='font-medium text-gray-800'>
												Material:
											</strong>{' '}
											{product.description.material}
										</p>
									)}
									{product.description.housing && (
										<p>
											<strong className='font-medium text-gray-800'>
												Housing:
											</strong>{' '}
											{product.description.housing}
										</p>
									)}
								</div>
							</div>
							<div>
								<h3 className='font-semibold text-gray-700 text-lg'>
									Contact for Purchase
								</h3>
								<p className='mt-2 text-base text-gray-600'>
									Please reach out for pricing and orders.
								</p>
								<a
									href='mailto:info@shabbir-hardware.com'
									className='mt-3 inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 transition shadow'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
										<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
									</svg>
									Email Us for an Inquiry
								</a>
							</div>
						</div>
					</div>
					{product.variants && product.variants.length > 0 && (
						<div className='mt-12'>
							<h3 className='text-2xl font-bold text-gray-800 mb-6'>
								Product Variants & Specifications
							</h3>
							<div className='overflow-hidden rounded-xl border border-gray-200 shadow-sm'>
								<div className='overflow-x-auto'>
									<table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
										<thead className='text-left bg-gray-50'>
											<tr>
												{tableHeaders.map((header) => (
													<th
														key={header}
														scope='col'
														className='whitespace-nowrap px-6 py-4 font-semibold text-gray-700 tracking-wider'
													>
														{header}
													</th>
												))}
											</tr>
										</thead>
										<tbody className='divide-y divide-gray-200'>
											{product.variants.map((variant, idx) => (
												<tr
													key={idx}
													className='hover:bg-gray-50 transition-colors'
												>
													{tableHeaders.map((header, cellIdx) => (
														<td
															key={header}
															className={`whitespace-nowrap px-6 py-4 ${
																cellIdx === 0
																	? 'font-medium text-gray-900'
																	: 'text-gray-700'
															}`}
														>
															{variant[header]}
														</td>
													))}
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
