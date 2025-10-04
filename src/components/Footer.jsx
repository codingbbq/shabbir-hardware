import logo from '../assets/images/shabbir-hardware.svg';

const Footer = ({ onNavigate }) => (
	<footer className='bg-gray-800 text-white'>
		<div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{/* Column 1: Brand Info */}
				<div className='md:col-span-2 lg:col-span-1'>
					<div className='flex items-center space-x-2'>
						<img
							src={logo}
							alt='Shabbir Hardware Logo'
							className='h-10 w-10 sm:h-10 sm:w-10'
						/>
						<h3 className='text-xl font-bold'>Shabbir Hardware</h3>
					</div>
					<p className='mt-4 text-gray-400'>
						Keeping your world in motion with quality caster solutions.
					</p>
				</div>

				{/* Column 2: Quick Links */}
				<div>
					<h3 className='text-lg font-semibold tracking-wider uppercase text-gray-300'>
						Quick Links
					</h3>
					<ul className='mt-4 space-y-2'>
						<li>
							<button
								onClick={() => onNavigate('home')}
								className='text-gray-400 hover:text-white transition'
							>
								Home
							</button>
						</li>
						<li>
							<button
								onClick={() => onNavigate('products')}
								className='text-gray-400 hover:text-white transition'
							>
								Products
							</button>
						</li>
					</ul>
				</div>

				{/* Column 3: Contact Info */}
				<div className='md:col-span-2 lg:col-span-2'>
					<h3 className='text-lg font-semibold tracking-wider uppercase text-gray-300'>
						Contact Us
					</h3>
					<ul className='mt-4 space-y-3 text-gray-400'>
						<li className='flex items-start'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 mr-3 flex-shrink-0 mt-1'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
									clipRule='evenodd'
								/>
							</svg>
							<span>Pune, Maharashtra, India</span>
						</li>
						<li className='flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 mr-3 flex-shrink-0'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
							</svg>
							<a href='tel:+919175892153' className='hover:text-white transition'>
								+91 917 589 21 53
							</a>
						</li>
						<li className='flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 mr-3 flex-shrink-0'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
								<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
							</svg>
							<a
								href='mailto:info@shabbir-hardware.com'
								className='hover:text-white transition'
							>
								info@shabbir-hardware.com
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center'>
				<p className='text-sm text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0'>
					&copy; {new Date().getFullYear()} Shabbir Hardware. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
