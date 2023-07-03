import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.js';

const getImageDownloadURL = async (path) => {
	try {
		const imageRef = ref(storage, path);
		const downloadURL = await getDownloadURL(imageRef);
		return downloadURL;
	} catch (error) {
		console.error('Error getting download URL:', error);
		return null;
	}
};

export { getImageDownloadURL };
