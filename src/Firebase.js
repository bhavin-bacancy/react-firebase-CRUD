import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
	apiKey: "AIzaSyB2vvVUDnZXLP408ZY3h5ypiSXuuabupyQ",
	authDomain: "react-firebase-crud-35773.firebaseapp.com",
	databaseURL: "https://react-firebase-crud-35773.firebaseio.com",
	projectId: "react-firebase-crud-35773",
	storageBucket: "react-firebase-crud-35773.appspot.com",
	messagingSenderId: "754838705800"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;