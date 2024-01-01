import {Logo} from './Logo.jsx';
import {AppNav} from './AppNav.jsx';
import {Footer} from './Footer.jsx';
import {Outlet} from 'react-router-dom';

export const Sidebar = () => {
	return (
		<div className='w-1/2 flex flex-col items-center justify-between'>
			<div className='flex flex-col items-center'>
				<Logo></Logo>
				<AppNav></AppNav>
				<br/>
				<Outlet></Outlet>
			</div>
			
			<Footer></Footer>
		</div>
	)
}