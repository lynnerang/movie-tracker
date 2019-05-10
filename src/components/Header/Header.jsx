import React from 'react';

const Header = () => {
	return (
		<header className="top-bar">
			<div className="logo-area">
				<img className="logo-img" src={require('../../../src/images/logo.png')} alt="Movie-tracker-logo" />
				<h1 className="logo-text">MovieTracker</h1>
      </div>
      <div className='user-area'>
        <div className='inner-search'>
          <input className='search-box' placeholder='Search by title or keyword...' />
          <i className='fas fa-search'></i>
        </div>
        <p className='login-link'>Login / Sign up</p>
      </div>
		</header>
	);
};

export default Header;
