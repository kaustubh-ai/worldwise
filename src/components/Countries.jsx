import {Link, useParams} from 'react-router-dom';
import {useCities} from 'src/contexts/CitiesContext.jsx';

export const Countries = () => {
	const {cities, isLoading} = useCities()
	
	if (isLoading)
		return <p>Loading</p>
	
	const {id} = useParams()
	
	if (id)
		return <p>got the id {id}</p>
	
	return (
		<div className='text-white'>
			{cities.map(city =>
				<Link to={`${city.country}_ayooo`}
				      key={city.id}>
					<p className='mb-2'>{city.country}</p>
				</Link>)}
		</div>
	)
}