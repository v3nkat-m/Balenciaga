import React from 'react';
import Products from '../components/Product';
import Header from '../components/Header';
import Search from '../components/Search';
import ImageUpload from '../components/ImageUpload';

export default function Men() {
	return (
		<div>
			<Header />
			<Search />
			<div className="Falls23-women">FALL 23 MEN</div>
			<ImageUpload
				path={'gs://balenciaga-venkat.appspot.com/Men/men-header-img.jpg'}
				id="Productpageheader"
			/>
			<Products category="MEN" />
		</div>
	);
}
