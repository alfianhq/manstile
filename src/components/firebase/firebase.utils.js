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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// apabila tidak ada atutentikasi .. exit
	if (!userAuth) return;

	// apabila ada
	const userRef = firestore.doc(`user/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user ', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
