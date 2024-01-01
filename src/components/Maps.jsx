import {useNavigate, useSearchParams} from 'react-router-dom';

export const Maps = () => {
	const navigate = useNavigate()
	const [searchParams, setSearchParams] = useSearchParams()
	const lat = searchParams.get('lat')
	const lng = searchParams.get('lng')
	
	return (
		<div className='w-1/2 text-white'
		     onClick={() => navigate('form')}>
			<h1>MAP</h1>
			<p>{lat}</p>
			<p>{lng}</p>
			<button onClick={(e) => {
				e.stopPropagation()
				setSearchParams({lat: '1233', lng: searchParams.get('lng')})
			}}>click
			</button>
		</div>
	)
}