import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBimd4yalAGzWmBOIQIVZmG2-2aZWpMo3c',
	authDomain: 'ecom-tes.firebaseapp.com',
	databaseURL: 'https://ecom-tes.firebaseio.com',
	projectId: 'ecom-tes',
	storageBucket: 'ecom-tes.appspot.com',
	messagingSenderId: '1093474482701',
	appId: '1:1093474482701:web:cbbcf23b0b8aba5d32b344',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
