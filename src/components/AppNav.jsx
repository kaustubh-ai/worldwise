import {NavLink} from 'react-router-dom';

export const AppNav = () => {
	return (
		<nav>
			<ul className='flex gap-3 mt-10'>
				<li>
					<NavLink to='cities' className='px-2 py-1 rounded-md hover:bg-gray-400'>Cities</NavLink>
				</li>
				
				<li>
					<NavLink to='countries' className='px-2 py-1 rounded-md hover:bg-gray-400'>Countries</NavLink>
				</li>
			</ul>
		</nav>
	)
}