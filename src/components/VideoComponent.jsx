import React, { useState, useEffect, useRef } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import '../css/VideoComponent.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Link } from 'react-router-dom';

const VideoComponent = () => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	useEffect(() => {
		const videoElement = videoRef.current;

		const videoSource = ref(
			storage,
			'gs://balenciaga-venkat.appspot.com/Balenciaga.mp4'
		);
		getDownloadURL(videoSource)
			.then((url) => {
				videoElement.src = url;
				videoElement.addEventListener('ended', handleVideoEnded);
				videoElement.play().catch((error) => {
					console.error('Failed to play video:', error);
				});
				setIsPlaying(true);
			})
			.catch((error) => {
				console.error('Error getting download URL:', error);
			});

		return () => {
			videoElement.removeEventListener('ended', handleVideoEnded);
		};
	}, []);

	const handleVideoEnded = () => {
		const videoElement = videoRef.current;
		videoElement.currentTime = 0;
		videoElement.play().catch((error) => {
			console.error('Failed to play video:', error);
		});
	};

	const handlePlayPause = () => {
		const videoElement = videoRef.current;
		if (videoElement.paused) {
			videoElement.play().catch((error) => {
				console.error('Failed to play video:', error);
			});
			setIsPlaying(true);
		} else {
			videoElement.pause();
			setIsPlaying(false);
		}
	};

	const handleToggleMute = () => {
		const videoElement = videoRef.current;
		videoElement.muted = !videoElement.muted;
		setIsMuted(!isMuted);
	};

	return (
		<div className="video-container">
			<video
				ref={videoRef}
				className="custom-video-player"
				controls={false}
				autoPlay
			></video>
			<div className="custom-controls">
				<div onClick={handlePlayPause} className="videocomponent-btn">
					{isPlaying ? (
						<PauseCircleIcon style={{ fontSize: '3rem' }} />
					) : (
						<PlayCircleIcon style={{ fontSize: '3rem' }} />
					)}
				</div>
				<div onClick={handleToggleMute} className="videocomponent-btn">
					{isMuted ? (
						<VolumeOffIcon style={{ fontSize: '3rem' }} />
					) : (
						<VolumeUpIcon style={{ fontSize: '3rem' }} />
					)}
				</div>
			</div>
			<div className="video-wrapper">
				<div className="video-title-flex">
					<div className="video-title">LE CAGOLE</div>
					<Link to={`/bags`}>
						<button className="video-btn">SHOP NOW</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VideoComponent;
