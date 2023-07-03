import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBGJpa6TAv88POe7ZoIrAHRjknl6s8YayU',
	authDomain: 'balenciaga-venkat.firebaseapp.com',
	projectId: 'balenciaga-venkat',
	storageBucket: 'balenciaga-venkat.appspot.com',
	messagingSenderId: '979017597393',
	appId: '1:979017597393:web:a5a21f6e2c7ebf6253e0f0',
	databaseURL: 'https://balenciaga-venkat-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);

export { db, storage };
