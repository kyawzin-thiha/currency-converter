import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Skeleton from './pages/Skeleton';
import axios from './helper/axios';
import './App.css';
function App() {
	const [data, setData] = useState<any>();
	useEffect(() => {
		fetch();
	}, []);
	const fetch = async () => {
		const data = await axios.get('');
		setData(data.data);
	};
	if (data) {
		return (
			<div className='App'>
				<LandingPage data={data} />
			</div>
		);
	} else {
		return (
			<div className='App'>
				<Skeleton />
			</div>
		);
	}
}

export default App;
