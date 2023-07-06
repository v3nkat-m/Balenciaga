import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import NewArrivals from '../components/NewArrivals';
import VideoComponent from '../components/VideoComponent';
import ImageUpload from '../components/ImageUpload';
import Footer from '../components/Footer';
import '../css/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
	const [screenSize, setScreenSize] = useState('');
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 2000);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width >= 550) {
				setScreenSize('large');
			} else {
				setScreenSize('small');
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	const imagePathForMen =
		screenSize === 'large'
			? 'gs://balenciaga-venkat.appspot.com/Landing images/chutiyas.jpg'
			: 'gs://balenciaga-venkat.appspot.com/Landing images/chutiya.jpg';
	const imagePathForWomen =
		screenSize === 'large'
			? 'gs://balenciaga-venkat.appspot.com/Landing images/gals.jpg'
			: 'gs://balenciaga-venkat.appspot.com/Landing images/gal.jpg';

	return (
		<div>
			<Header />
			<Search />
			<NewArrivals />
			<VideoComponent />

			<div className="HomeImgContainer1">
				<ImageUpload
					path={
						'gs://balenciaga-venkat.appspot.com/Landing images/cagole bag.jpg'
					}
				/>
				<div className="img-title-flex1">
					<div className="img-title1">HANDBAGS</div>
					<Link to={`/bags`}>
						<button className="img-btn">FOR WOMEN</button>
					</Link>
				</div>
			</div>
			<div className="HomeImgContainer2">
				<ImageUpload path={imagePathForMen} />
				<div className="img-title-flex2">
					<div className="img-title2">FALL 23</div>
					<Link to={`/men`}>
						<button className="img-btn">FOR MEN</button>
					</Link>
				</div>
			</div>
			<div className="HomeImgContainer3">
				<ImageUpload
					path={'gs://balenciaga-venkat.appspot.com/Landing images/chappal.jpg'}
				/>
				<div className="img-title-flex3">
					<div className="img-title3">SANDALS</div>
					<Link to={`/sandals`}>
						<button className="img-btn">FOR WOMEN</button>
					</Link>
				</div>
			</div>
			<div className="HomeImgContainer4">
				<ImageUpload path={imagePathForWomen} />
				<div className="img-title-flex4">
					<div className="img-title4">FALL 23</div>
					<Link to={`/women`}>
						<button className="img-btn">FOR WOMEN</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}
