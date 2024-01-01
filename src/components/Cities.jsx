// noinspection EqualityComparisonWithCoercionJS

import {Link, useParams} from 'react-router-dom';
import {useCities} from 'src/contexts/CitiesContext.jsx';

export const Cities = () => {
	const {cities, curCity, isLoading} = useCities()
	
	if (isLoading)
		return <p>Loading</p>
	
	return (
		<div className='text-white'>
			{cities.map(city =>
				<Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
				      key={city.id}>
					<p className='mb-2'>
						{city.cityName}
						{city.id == curCity.id && <span>&rarr;</span>}
					</p>
				</Link>)}
		</div>
	)
}