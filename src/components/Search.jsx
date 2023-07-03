import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Search.css';
import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';

const SearchInput = styled(InputBase)({
	fontSize: '1.5rem',
	fontFamily: 'inherit',
	width: '250px',
});

export default function Search() {
	const [setInputVisible] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};
	return (
		<div className="Search-border-wrapper">
			<div className="Search-wrapper">
				<SearchIcon style={{ fontSize: '2.5rem', color: 'rgb(70,70,70)' }} />
				<form className="search-input">
					<SearchInput
						type="text"
						placeholder="WHAT ARE YOU LOOKING FOR?"
						autoFocus
						value={searchTerm}
						onChange={handleChange}
						onBlur={() => setInputVisible(false)}
					/>
				</form>
			</div>
		</div>
	);
}
