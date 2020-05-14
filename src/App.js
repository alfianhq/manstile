import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
	return (
		<div>
			{/* exact artinya true atau false 
		kalau true maka harus persis di path nya 
		contoh - kalau pakai exact - halaman sebelumnya seprti hoempage tidak akan di render */}
			<Route path='/' component={HomePage} />
			<Route path='/hats' component={HatsPage} />
		</div>
	);
}

export default App;
