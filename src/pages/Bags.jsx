import React from 'react';
import Products from '../components/Product';
import Header from '../components/Header';
import Search from '../components/Search';
import ImageUpload from '../components/ImageUpload';

export default function Bags() {
	return (
		<div className="ProductsDisplay">
			<Header />
			<Search />
			<div className="Falls23-women">BAGS FOR WOMEN</div>
			<ImageUpload
				path={'gs://balenciaga-venkat.appspot.com/Bags/cagole-bottom.jpg'}
				id="Productpageheader"
			/>
			<Products category="BAG" />
		</div>
	);
}
