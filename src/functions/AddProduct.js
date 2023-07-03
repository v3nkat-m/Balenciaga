const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, set } = require('firebase/database');

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
const database = getDatabase(app);

const addProduct = (productData) => {
	const productRef = push(ref(database, 'products'));
	const newProductKey = productRef.key;
	set(ref(database, `products/${newProductKey}`), productData)
		.then(() => {
			console.log('Product added successfully!');
		})
		.catch((error) => {
			console.error('Error adding product:', error);
		});
};

const productData = {
	heading: 'LE CAGILE HEART MINI BAG METALLIZED',
	category: 'BAG',
	colour: 'PINK',
	description:
		'LE CAGILE HEART MINI BAG METALLIZED Arena lambskin, aged silver hardware',
	detailedDescription:
		' Dimensions : L10,2 x H6,3 x W2,7 inch\n 1) Metallized Arena lambskin\n 2) Shoulder bag\n 3) Adjustable\n shoulder strap (18,1 inch)\n 4) Leather braided shoulder pad\n 5) Zipped closure with knotted leather puller\n 6) Aged silver hardware\n 7) 1 removable zipped pouch\n 8) 1 removable heart mirror\n 9) Cotton canvas lining\n 10) Made in Italy\n 11) Wipe with a soft cloth',
	material: 'Product Material',
	'Product ID': '11',
};

addProduct(productData);
