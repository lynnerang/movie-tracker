import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../containers/Login/Login';

const Header = () => {
	return (
		<header className="top-bar">
			<Link exact="true" to="/" className="logo-area">
				<img className="logo-img" src={require('../../../src/images/logo.png')} alt="Movie-tracker-logo" />
				<h1 className="logo-text">MovieTracker</h1>
			</Link>
			<div className="user-area">
				<div className="inner-search">
					<input className="search-box" placeholder="Search by title or keyword..." />
					<i className="fas fa-search" />
				</div>
				<Login />
				{/* <p className='login-link'>Login / Sign up</p> */}
			</div>
		</header>
	);
};

export default Header;
