/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {Link} from 'react-router-dom';
import {PageNav} from 'src/components/PageNav.jsx';

export const Home = () => {
	return (
		<>
			<main className='bg-hero_pattern h-screen bg-cover p-10 text-white'>
				<PageNav></PageNav>
				
				<section className='text-center mt-10'>
					<h1>
						You travel the world.<br/>WorldWise keeps track of your adventures.
					</h1>
					
					<h2>
						A world map that tracks your footsteps into every city you can think
						of. Never forget your wonderful experiences, and show your friends how
						you have wandered the world.
					</h2>
					
					<Link to='/app' className='px-2 py-1 rounded-md hover:bg-gray-400 inline-block mt-4'>Start Now</Link>
				</section>
			</main>
		</>
	)
}