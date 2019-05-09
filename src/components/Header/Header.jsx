import React from 'react';

const Header = () => {
	return (
		<header className="top-bar">
      <div className="logo-area">
        <img className="logo-img" src={require('../../../src/images/logo.png')} />
        <h1 className="logo-text">MovieTracker</h1>
      </div>
		</header>
	);
};

export default Header;
