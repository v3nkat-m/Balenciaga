import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import ClearIcon from '@mui/icons-material/Clear';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import '../css/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
	//Bunch of state declarations
	const [showMenuButton, setShowMenuButton] = useState(true);
	const [isMenuVisible, setMenuVisible] = useState(false);
	const [isSubMenuVisible, setSubMenuVisible] = useState(null);
	const [isDownMenuVisible, setDownMenuVisible] = useState(null);
	const [isDownMenuExpanded, setDownMenuExpanded] = useState(false);
	const [isClicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!isClicked);
	};

	useEffect(() => {
		const handleDocumentClick = (e) => {
			const isDropdownButton = e.target.matches('[data-dropdown-button]');
			if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
				return;

			let currentDropdown;
			if (isDropdownButton) {
				currentDropdown = e.target.closest('[data-dropdown]');
				currentDropdown.classList.toggle('active');
			}

			document
				.querySelectorAll('[data-dropdown].active')
				.forEach((dropdown) => {
					if (dropdown === currentDropdown) return;
					dropdown.classList.remove('active');
				});
		};

		document.addEventListener('click', handleDocumentClick);

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);

	//Mobile menu icon Vs no icon in computer?

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1000) {
				setShowMenuButton(false);
				setMenuVisible(false);
			} else {
				setShowMenuButton(true);
				setMenuVisible(false);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	//Handling Menu Clicks
	const handleMenuClick = () => {
		setMenuVisible(!isMenuVisible) || setSubMenuVisible(null);
		document.body.style.overflowY = isMenuVisible ? 'auto' : 'hidden';
	};

	//Handling SubMenu Clicks
	const handleSubMenuClick = (option) => {
		if (isSubMenuVisible === option) {
			setDownMenuVisible(null);
			setSubMenuVisible(null);
			setDownMenuExpanded(false);
		} else {
			setSubMenuVisible(option);
			setDownMenuVisible(null);
			setDownMenuExpanded(false);
		}
	};

	//Handling DownMenu Clicks
	const handleDownMenuClick = (option) => {
		if (isDownMenuVisible === option) {
			setDownMenuVisible(null);
			setDownMenuExpanded(false);
		} else {
			setDownMenuVisible(option);
			setDownMenuExpanded(true);
		}
	};

	return (
		//Main Menu Code
		<div className="Header-border">
			<div className="Header-container">
				{showMenuButton ? (
					isMenuVisible ? (
						<ClearIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '2rem' }}
							onClick={handleMenuClick}
							className="MenuIcon"
						/>
					) : (
						<MenuIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '2rem' }}
							onClick={handleMenuClick}
							className="MenuIcon"
						/>
					)
				) : (
					<div className="Header-options">
						<div className="dropdown" data-dropdown>
							<p className="HeaderNewArrivals" onClick={handleClick}>
								NEW ARRIVALS
							</p>
							<div className={`dropdown-menu ${isClicked ? 'active' : ''}`}>
								<div className="dropdown-item">NEW ARRIVALS-MEN</div>
								<div className="dropdown-item">NEW ARRIVALS-WOMEN</div>
								<div className="dropdown-item">
									<div>DISCOVER</div>
									<div>Fall 23 Women</div>
									<div>Fall 23 Men</div>
									<div>Summer 23 Women</div>
									<div>Summer 23 Men</div>
									<div>High Summer - Bags</div>
									<div>High Summer - Shoes</div>
									<div>3XL</div>
									<div>Le Cagole</div>
									<div>Kids</div>
								</div>
								<div className="dropdown-item">
									<div>CALL US +44 20 33 18 60 32</div>
									<div>Mon-Sat 9am-6.30pm</div>
									<div>EMAIL US</div>
									<div>We will reply within 24 hours</div>
									<div>STORE APPOINTMENT</div>
									<div>The store will reply shortly</div>
								</div>
								<div className="dropdown-item"></div>
								<div className="dropdown-item"></div>
							</div>
						</div>
						<div className="dropdown">
							<Link to={`/women`} className="HeaderLink">
								<p>WOMEN</p>
							</Link>
						</div>

						<div className="dropdown">
							<Link to={`/men`} className="HeaderLink">
								<p>MEN</p>
							</Link>
						</div>

						<div className="dropdown">
							<Link to={`/bags`} className="HeaderLink">
								<p>BAGS</p>
							</Link>
						</div>

						<div className="dropdown">
							<Link to={`/sandals`} className="HeaderLink">
								<p>SANDALS</p>
							</Link>
						</div>
					</div>
				)}
				<div className="Header-logo">
					<Logo />
				</div>
				{!showMenuButton && (
					<div className="Header-login">
						<p>LOGIN</p>
					</div>
				)}
			</div>
			{isMenuVisible && (
				<div className="menu-content">
					<div className="menu-content-flex1">
						<div
							className="menu-content-flex1-c"
							onClick={() => handleSubMenuClick('NewArrival')}
						>
							<div>NEW ARRIVALS</div>
							<NavigateNextIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						</div>
						<div
							className="menu-content-flex1-c"
							onClick={() => handleSubMenuClick('Women')}
						>
							<div>WOMEN</div>
							<NavigateNextIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						</div>
						<div
							className="menu-content-flex1-c"
							onClick={() => handleSubMenuClick('Men')}
						>
							<div>MEN</div>
							<NavigateNextIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						</div>
						<div
							className="menu-content-flex1-c"
							onClick={() => handleSubMenuClick('Gifts')}
						>
							<div>GIFTS</div>
							<NavigateNextIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						</div>
						<div
							className="menu-content-flex1-c"
							onClick={() => handleSubMenuClick('Explore')}
						>
							<div>EXPLORE</div>
							<NavigateNextIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						</div>
					</div>
					<div className="menu-content-flex2">
						<div className="menu-content-flex2-c">LOGIN</div>
						<div className="menu-content-flex2-c">
							COUNTRY/REGION: INTERNATIONAL VERSION
						</div>
						<div className="menu-content-flex2-c">LANGUAGE: ENGLISH</div>
						<div className="menu-content-flex2-c">CLIENT SERVICES</div>
					</div>
					<div className="menu-content-flex3">
						<div className="menu-content-flex3-c">
							<div className="menu-content-textregular">
								CALL US +44 20 33 18 60 32
							</div>
							<div className="menu-content-textlight">Mon-Sat 9am-6.30pm</div>
						</div>
						<div className="menu-content-flex3-c">
							<div className="menu-content-textregular">EMAIL US</div>
							<div className="menu-content-textlight">
								We will reply within 24 hours
							</div>
						</div>
					</div>
				</div>
			)}
			{isMenuVisible && isSubMenuVisible === 'NewArrival' && (
				<div className="Newarrival-Submenu-content">
					<div
						className="Newarrival-Submenu-header Newarrival-Submenu-options"
						onClick={() => handleSubMenuClick(null)}
					>
						<NavigateBeforeIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
						/>
						<div className="text-align-center">NEW ARRIVALS</div>
					</div>
					<div className="Newarrival-Submenu-options">NEW ARRIVALS - WOMEN</div>
					<div className="Newarrival-Submenu-options">NEW ARRIVALS - MEN</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('NewArrivalDiscover')}
					>
						<div>DISCOVER</div>
						{isDownMenuExpanded &&
						isDownMenuVisible === 'NewArrivalDiscover' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
				</div>
			)}
			{isMenuVisible && isSubMenuVisible === 'Women' && (
				<div className="Newarrival-Submenu-content">
					<div
						className="Newarrival-Submenu-header Newarrival-Submenu-options"
						onClick={() => handleSubMenuClick(null)}
					>
						<NavigateBeforeIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
						/>
						<div className="text-align-center">WOMEN</div>
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('WomenReadyToWear')}
					>
						<div>READY-TO-WEAR</div>
						{isDownMenuExpanded && isDownMenuVisible === 'WomenReadyToWear' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('WomenShoes')}
					>
						<div>SHOES</div>
						{isDownMenuExpanded && isDownMenuVisible === 'WomenShoes' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('WomenBags')}
					>
						<div>BAGS</div>
						{isDownMenuExpanded && isDownMenuVisible === 'WomenBags' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('WomenAccessories')}
					>
						<div>ACCESSORIES</div>
						{isDownMenuExpanded && isDownMenuVisible === 'WomenAccessories' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
				</div>
			)}

			{isMenuVisible && isSubMenuVisible === 'Men' && (
				<div className="Newarrival-Submenu-content">
					<div
						className="Newarrival-Submenu-header Newarrival-Submenu-options"
						onClick={() => handleSubMenuClick(null)}
					>
						<NavigateBeforeIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
						/>
						<div className="text-align-center">MEN</div>
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('MenReadyToWear')}
					>
						<div>READY-TO-WEAR</div>
						{isDownMenuExpanded && isDownMenuVisible === 'MenReadyToWear' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('MenShoes')}
					>
						<div>SHOES</div>
						{isDownMenuExpanded && isDownMenuVisible === 'MenShoes' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('MenBags')}
					>
						<div>BAGS</div>
						{isDownMenuExpanded && isDownMenuVisible === 'MenBags' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('MenAccessories')}
					>
						<div>ACCESSORIES</div>
						{isDownMenuExpanded && isDownMenuVisible === 'MenAccessories' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
				</div>
			)}
			{isMenuVisible && isSubMenuVisible === 'Gifts' && (
				<div className="Newarrival-Submenu-content">
					<div
						className="Newarrival-Submenu-header Newarrival-Submenu-options"
						onClick={() => handleSubMenuClick(null)}
					>
						<NavigateBeforeIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
						/>
						<div className="text-align-center">GIFTS</div>
					</div>
					<div className="Newarrival-Submenu-discover Newarrival-Submenu-options">
						<div>VIEW ALL</div>
					</div>
					<div className="Newarrival-Submenu-discover Newarrival-Submenu-options">
						<div>PERSONALIZATION</div>
					</div>
					<div className="Newarrival-Submenu-discover Newarrival-Submenu-options">
						<div>FOR WOMEN</div>
					</div>
					<div className="Newarrival-Submenu-discover Newarrival-Submenu-options">
						<div>FOR MEN</div>
					</div>
				</div>
			)}
			{isMenuVisible && isSubMenuVisible === 'Explore' && (
				<div className="Newarrival-Submenu-content">
					<div
						className="Newarrival-Submenu-header Newarrival-Submenu-options"
						onClick={() => handleSubMenuClick(null)}
					>
						<NavigateBeforeIcon
							style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
						/>
						<div className="text-align-center">EXPLORE</div>
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('ExploreSpecialProjects')}
					>
						<div>SPECIAL PROJECTS</div>
						{isDownMenuExpanded &&
						isDownMenuVisible === 'ExploreSpecialProjects' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('ExploreHeritage')}
					>
						<div>HERITAGE</div>
						{isDownMenuExpanded && isDownMenuVisible === 'ExploreHeritage' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('ExploreCollections')}
					>
						<div>COLLECTIONS</div>
						{isDownMenuExpanded &&
						isDownMenuVisible === 'ExploreCollections' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
					<div
						className="Newarrival-Submenu-discover Newarrival-Submenu-options"
						onClick={() => handleDownMenuClick('ExploreCommitments')}
					>
						<div>OUR COMMITMENTS</div>
						{isDownMenuExpanded &&
						isDownMenuVisible === 'ExploreCommitments' ? (
							<ExpandLessIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						) : (
							<ExpandMoreIcon
								style={{ color: 'rgb(70, 70, 70)', fontSize: '3rem' }}
							/>
						)}
					</div>
				</div>
			)}
			{isMenuVisible &&
				isSubMenuVisible === 'NewArrival' &&
				isDownMenuVisible === 'NewArrivalDiscover' && (
					<div className="Downmenu-container">
						<div>Fall 23 Women</div>
						<div>Fall 23 Men</div>
						<div>Summer 23 Women</div>
						<div>Summer 23 Men</div>
						<div>High Summer - Bags</div>
						<div>High Summer - Shoes</div>
						<div>Le Cagole</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Women' &&
				isDownMenuVisible === 'WomenReadyToWear' && (
					<div className="Downmenu-container w1">
						<div>Jackets</div>
						<div>Sweatshirts</div>
						<div>T-shirts</div>
						<div>Pants</div>
						<div>Skirts</div>
						<div>Activewear</div>
						<div>Swimwear</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Women' &&
				isDownMenuVisible === 'WomenShoes' && (
					<div className="Downmenu-container w2">
						<div>Sneakers</div>
						<div>Boots</div>
						<div>Heels</div>
						<div>Sandals</div>
						<div>Crocs</div>
						<div>Speed</div>
						<div>Track</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Women' &&
				isDownMenuVisible === 'WomenBags' && (
					<div className="Downmenu-container w3">
						<div>Hand Bags</div>
						<div>Shoulder Bags</div>
						<div>Mini Bags</div>
						<div>Chain Bags</div>
						<div>Tote Bags</div>
						<div>Hourglass</div>
						<div>Le Cagole</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Women' &&
				isDownMenuVisible === 'WomenAccessories' && (
					<div className="Downmenu-container w4">
						<div>Sunglasses</div>
						<div>Belts</div>
						<div>Scarves and Caps</div>
						<div>Scarves</div>
						<div>Phone Accessories</div>
						<div>Homewear</div>
						<div>Objects</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Men' &&
				isDownMenuVisible === 'MenReadyToWear' && (
					<div className="Downmenu-container w1">
						<div>Jackets</div>
						<div>Sweatshirts</div>
						<div>T-shirts</div>
						<div>Pants</div>
						<div>Skirts</div>
						<div>Activewear</div>
						<div>Swimwear</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Men' &&
				isDownMenuVisible === 'MenShoes' && (
					<div className="Downmenu-container w2">
						<div>Sneakers</div>
						<div>Boots</div>
						<div>Heels</div>
						<div>Sandals</div>
						<div>Crocs</div>
						<div>Speed</div>
						<div>Track</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Men' &&
				isDownMenuVisible === 'MenBags' && (
					<div className="Downmenu-container w3">
						<div>Hand Bags</div>
						<div>Shoulder Bags</div>
						<div>Mini Bags</div>
						<div>Chain Bags</div>
						<div>Tote Bags</div>
						<div>Hourglass</div>
						<div>Le Cagole</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Men' &&
				isDownMenuVisible === 'MenAccessories' && (
					<div className="Downmenu-container w4">
						<div>Sunglasses</div>
						<div>Belts</div>
						<div>Scarves and Caps</div>
						<div>Scarves</div>
						<div>Phone Accessories</div>
						<div>Homewear</div>
						<div>Objects</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Explore' &&
				isDownMenuVisible === 'ExploreSpecialProjects' && (
					<div className="Downmenu-container w1">
						<div>Fall 23 Campaign</div>
						<div>Summer 23 Campaign</div>
						<div>Winter 23 Campaign</div>
						<div>Fall 22 Campaign</div>
						<div>Summer 22 Campaign</div>
						<div>Winter 22 Campaign</div>
						<div>Special Campaign</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Explore' &&
				isDownMenuVisible === 'ExploreHeritage' && (
					<div className="Downmenu-container w2">
						<div>Maison</div>
						<div>Crisstobal</div>
						<div>George V</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Explore' &&
				isDownMenuVisible === 'ExploreCollections' && (
					<div className="Downmenu-container w3">
						<div>Spring 24</div>
						<div>Winter 23</div>
						<div>Fall 23</div>
						<div>Spring 23</div>
						<div>Express 23</div>
						<div>Special 23</div>
						<div>Summer 23</div>
					</div>
				)}
			{isMenuVisible &&
				isSubMenuVisible === 'Explore' &&
				isDownMenuVisible === 'ExploreCommitments' && (
					<div className="Downmenu-container w4">
						<div>National Children's Alliance</div>
						<div>World Food Programme</div>
						<div>Sustainability</div>
						<div>Pride</div>
						<div>Earth day</div>
					</div>
				)}
		</div>
	);
}
