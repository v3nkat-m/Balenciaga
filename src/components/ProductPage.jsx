import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { getImageDownloadURL } from '../utils/FirebaseUtils';
import { useParams } from 'react-router-dom';
import '../css/ProductPage.css';
import Header from './Header';
import Search from './Search';

export default function ProductPage() {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const database = getDatabase();
				const productRef = ref(database, `products/${productId}`);
				const productSnapshot = await get(productRef);
				const productData = productSnapshot.val();

				if (productData) {
					const downloadURL = await getImageDownloadURL(productData.URL);
					setProduct({ ...productData, downloadURL });
				}
			} catch (error) {
				console.error('Error fetching product:', error);
			}
		};

		fetchProduct();
	}, [productId]);

	if (!product) {
		return <div>Loading...</div>;
	}

	const handleBuy = () => {
		alert('Thank you for buying!');
	};

	return (
		<>
			<Header />
			<Search />
			<div className="productpage-grid">
				<img src={product.downloadURL} alt="Product" />
				<div className="productpage-border">
					<div className="productpage-flex">
						<h1>{product.heading}</h1>
						<p>Category: {product.category}</p>
						<p>Material: {product.material}</p>
						<p>Colour: {product.colour}</p>
						<p>{product.description}</p>
						<p>{product.detailedDescription}</p>
						<button onClick={handleBuy}>BUY NOW</button>
					</div>
				</div>
			</div>
		</>
	);
}
