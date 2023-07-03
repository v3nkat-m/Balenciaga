import React from 'react';
import Products from '../components/Product';
import Header from '../components/Header';
import Search from '../components/Search';
import ImageUpload from '../components/ImageUpload';

export default function Women() {
	return (
		<div>
			<Header />
			<Search />
			<div className="Falls23-women">FALL 23 WOMEN</div>
			<ImageUpload
				path={'gs://balenciaga-venkat.appspot.com/Women/women-header-img.jpg'}
				id="Productpageheader"
			/>
			<Products category="WOMEN" />
		</div>
	);
}
