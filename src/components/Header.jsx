import logo from '../assets/images/shabbir-hardware.svg';

const Header = ({ currentPage, onNavigate, isMobileMenuOpen, setIsMobileMenuOpen }) => (
	<header className='bg-white shadow-md sticky top-0 z-20'>
		<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='flex items-center justify-between h-20'>
				<div
					className='flex items-center space-x-4 cursor-pointer'
					onClick={() => onNavigate('home')}
				>
					<img
						src={logo}
						alt='Shabbir Hardware Logo'
						className='h-10 w-10 sm:h-10 sm:w-10'
					/>
					<h1 className='text-xl sm:text-2xl font-bold text-gray-800'>
						SHABBIR <span className='text-gray-700'>HARDWARE</span>
					</h1>
				</div>
				<nav className='hidden md:flex items-center space-x-8'>
					<button
						onClick={() => onNavigate('home')}
						className={`text-gray-600 hover:text-blue-600 transition font-semibold text-lg ${
							currentPage === 'home' ? 'text-blue-600' : ''
						}`}
					>
						Home
					</button>
					<button
						onClick={() => onNavigate('products')}
						className={`text-gray-600 hover:text-blue-600 transition font-semibold text-lg ${
							currentPage === 'products' || currentPage === 'productDetail'
								? 'text-blue-600'
								: ''
						}`}
					>
						Products
					</button>
					<a
						href='/Huzefa Jabalpurwala - Shabbir Hardware Catalog.pdf'
						download
						className='inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow-sm'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
						Download Catalog
					</a>
				</nav>
				<div className='md:hidden'>
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='text-gray-700 hover:text-blue-600'
					>
						<svg
							className='h-8 w-8'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16m-7 6h7'
								/>
							)}
						</svg>
					</button>
				</div>
			</div>
		</div>
		{/* Mobile Menu */}
		{isMobileMenuOpen && (
			<div className='md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-30'>
				<nav className='flex flex-col items-center p-4'>
					<button
						onClick={() => onNavigate('home')}
						className='w-full text-center py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-md'
					>
						Home
					</button>
					<button
						onClick={() => onNavigate('products')}
						className='w-full text-center py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-md mt-2'
					>
						Products
					</button>
					<a
						href='/Huzefa Jabalpurwala - Shabbir Hardware Catalog.pdf'
						download
						className='mt-2 inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow-sm'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
						Download Catalog
					</a>
				</nav>
			</div>
		)}
	</header>
);

export default Header;
