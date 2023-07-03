import React from 'react';
import Products from '../components/Product';
import Header from '../components/Header';
import Search from '../components/Search';
import ImageUpload from '../components/ImageUpload';

export default function Sandals() {
	return (
		<div>
			<Header />
			<Search />
			<div className="Falls23-women">SANDALS & MULES</div>
			<ImageUpload
				path={'gs://balenciaga-venkat.appspot.com/Chappal/sandal-header.jpg'}
				id="Productpageheader"
			/>
			<Products category="SANDAL" />
		</div>
	);
}
