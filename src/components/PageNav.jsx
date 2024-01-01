import {NavLink} from 'react-router-dom';
import {Logo} from './Logo.jsx';

export const PageNav = () => {
	return (
		<nav className='flex justify-between'>
			<Logo></Logo>
			
			<ul className='flex gap-3'>
				<li>
					<NavLink to='/pricing'
					         className={({isActive}) =>
						         isActive ? 'px-2 py-1 rounded-md bg-gray-400' :
							                  'px-2 py-1 rounded-md hover:bg-gray-400'}>Pricing
					</NavLink>
				</li>
				
				<li>
					<NavLink to='/products' className='rounded-md px-2 py-1 hover:bg-gray-400'>Product</NavLink>
				</li>
				
				<li>
					<NavLink to='/login' className='rounded-md bg-gray-400 px-2 py-1'>Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}
