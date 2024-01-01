import {useNavigate} from 'react-router-dom';

export const Forms = () => {
	const navigate = useNavigate()
	
	return (
		<div>
			<h1>FORM</h1>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	)
}