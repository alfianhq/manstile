import React from 'react';
import {Switch, Route} from 'react-router-dom';

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
			{/* switch akan merender secara order -contoh di bwah aswitch akan merender homepage dulu baru yang lainya 
			memberikan kontrol di code
			jadi tidak akan accidently render multiple component
			*/}

			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
