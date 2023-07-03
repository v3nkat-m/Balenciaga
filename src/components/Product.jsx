import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { getImageDownloadURL } from '../utils/FirebaseUtils';
import { Link } from 'react-router-dom';

import '../css/Products.css';

const Products = ({ category }) => {
	const [products, setProducts] = useState([]);
	const [isFourItemsLayout, setIsFourItemsLayout] = useState(false);

	const toggleLayout = () => {
		setIsFourItemsLayout(!isFourItemsLayout);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const database = getDatabase();
				const productsRef = ref(database, 'products');
				const productsSnapshot = await get(productsRef);
				const productsData = productsSnapshot.val();

				if (productsData) {
					const productsArray = Object.entries(productsData).map(
						([productId, product]) => ({
							...product,
							productId,
						})
					);
					const productsWithUrls = await Promise.all(
						productsArray.map(async (product) => {
							if (product.category === category) {
								return {
									...product,
									downloadURL: await getImageDownloadURL(product.URL),
								};
							}
							return null;
						})
					);

					setProducts(productsWithUrls.filter(Boolean));
				}
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, [category]);

	return (
		<div>
			<div className="Product-header-flex">
				<div>8 Results found</div>
				<button className="toggleButton" onClick={toggleLayout}>
					Toggle Layout
				</button>
			</div>

			<div
				className={`Product-grid ${
					isFourItemsLayout ? 'Product-grid--four' : ''
				}`}
			>
				{products.map((product) => (
					<Link
						to={`/product/${product.productId}`}
						key={product.productId}
						className="Product-flex"
					>
						<img
							src={product.downloadURL}
							alt="Product Image"
							className="Product-img"
						/>
						<h2>{product.heading}</h2>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Products;
