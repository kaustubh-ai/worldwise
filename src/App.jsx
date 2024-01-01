import {useEffect, useState} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Home} from 'src/pages/Home.jsx';
import {Products} from 'src/pages/Products.jsx';
import {Pricing} from 'src/pages/Pricing.jsx';
import {AppLayout} from 'src/pages/AppLayout.jsx';
import {Login} from 'src/pages/Login.jsx';
import {Cities} from 'src/components/Cities.jsx';
import {Countries} from 'src/components/Countries.jsx';
import {City} from 'src/components/City.jsx';
import {Forms} from 'src/components/Forms.jsx';
import {CitiesProvider} from 'src/contexts/CitiesContext.jsx';

function App() {
	return (
		<CitiesProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home/>}/>
					<Route path='/products' element={<Products/>}/>
					<Route path='/pricing' element={<Pricing/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/app' element={<AppLayout/>}>
						<Route index element={<Navigate replace to='cities'/>}/>
						<Route path='cities' element={<Cities/>}/>
						<Route path='cities/:id' element={<City/>}/>
						<Route path='countries' element={<Countries/>}/>
						<Route path='form' element={<Forms/>}/>
					</Route>
					<Route path='*' element={<Home/>}/>
				</Routes>
			</BrowserRouter>
		</CitiesProvider>
	)
}

export default App
