// noinspection EqualityComparisonWithCoercionJS

import {createContext, useContext, useEffect, useState} from 'react';

const CitiesContext = createContext()

const CitiesProvider = ({children}) => {
	const [cities, setCities] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [curCity, setCurCity] = useState({})
	
	const BASE_URL = 'http://localhost:8000'
	
	useEffect(() => {
		async function fetchCities() {
			try {
				setIsLoading(true)
				const res = await fetch(`${BASE_URL}/cities`)
				setCities(await res.json())
			} catch (err) {
				alert(err)
			} finally {
				setIsLoading(false)
			}
		}
		
		fetchCities().then()
	}, [])
	
	const getCity = async (id) => {
		try {
			setIsLoading(true)
			const res = await fetch(`${BASE_URL}/cities/${id}`)
			setCurCity(await res.json())
		} catch {
			alert('e')
		} finally {
			setIsLoading(false)
		}
	}
	
	return (
		<CitiesContext.Provider value={{cities, isLoading, curCity, getCity}}>
			{children}
		</CitiesContext.Provider>
	)
}

const useCities = () => {
	const context = useContext(CitiesContext)
	if (context == undefined)
		throw new Error('wrong context used')
	
	return context
}

export {CitiesProvider, useCities}