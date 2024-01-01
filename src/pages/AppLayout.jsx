import * as rx from '@reduxjs/toolkit'
import {Maps} from 'src/components/Maps.jsx';
import {Sidebar} from 'src/components/Sidebar.jsx';

export const AppLayout = () => {
	return (
		<div className='flex justify-between bg-hero_pattern h-screen bg-cover p-10'>
			<Sidebar></Sidebar>
			<Maps></Maps>
		</div>
	)
}