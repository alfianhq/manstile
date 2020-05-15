import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SinInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';
import {
	auth,
	createUserProfileDocument,
	// firestore,
} from './components/firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	// pastikan unsubrice defaultnya
	unsubscribeFromAuth = null;
	componentDidMount() {
		// listening to google -// user login
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// ambil data yang ada di fire store dan masukan ke state
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// set state
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				this.setState({
					currentUser: userAuth,
				});
			}
		});
	}

	componentWillUnmount() {
		// unsubscribe ketika unmount / default react lifacycle
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				{/* cek apakah user sudah login atau belum */}
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SinInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
