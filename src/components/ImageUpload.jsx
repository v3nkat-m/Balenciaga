import React, { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import '../css/ImageUpload.css';

export default function ImageUpload({ path }) {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		const imageRef = ref(storage, path);
		getDownloadURL(imageRef)
			.then((url) => {
				setImageUrl(url);
			})
			.catch((error) => {
				console.error('Error getting download URL:', error);
			});
	}, [path]);

	return (
		<div className="ImageUpload-img">
			<img src={imageUrl} alt="Header" />
		</div>
	);
}
