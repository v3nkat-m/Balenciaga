import React from 'react';
import logoSVG from '../pics/logo-small.svg';
import '../css/Logo.css';

export default function Logo() {
	return (
		<a href="/">
			<img className="logo" src={logoSVG} alt="logo"></img>
		</a>
	);
}
