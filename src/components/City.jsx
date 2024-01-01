import {useNavigate, useParams} from 'react-router-dom';
import {useCities} from 'src/contexts/CitiesContext.jsx';
import {useEffect} from 'react';

export const City = () => {
	const {id} = useParams()
	const {getCity, curCity, isLoading} = useCities()
	const navigate = useNavigate()
	
	useEffect(() => {
		getCity(id)
	}, [id]);
	
	if (isLoading)
		return <p>Loading...</p>
	
	return (
		<div className='text-white'>
			<h1>I am city {id}</h1>
			<p>{curCity.cityName}, {curCity.country}</p>
			<button className='mt-4 rounded-xl px-4 py-2 bg-gray-400'
			        onClick={() => navigate(-1)}>Back
			</button>
		</div>
	)
}