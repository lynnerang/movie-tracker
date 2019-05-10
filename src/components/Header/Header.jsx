import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../containers/UserForm/UserForm';

class Header extends Component {
	state = {
		showLogin: false,
		showSignup: true
	}

	render() {
    let form = null;
    
		if (this.state.showLogin) {
			form = <UserForm type="Log In" />;
		} else if (this.state.showSignup) {
      form = <UserForm type="Sign Up" />;
    }
    
		return (
      <header className="top-bar">
        {form}
				<Link exact="true" to="/" className="logo-area">
					<img className="logo-img" src={require('../../../src/images/logo.png')} alt="Movie-tracker-logo" />
					<h1 className="logo-text">MovieTracker</h1>
				</Link>
				<div className="user-area">
					<div className="inner-search">
						<input className="search-box" placeholder="Search by title or keyword..." />
						<i className="fas fa-search" />
					</div>
					<div className="user-links">
						<a
							className="login-link"
							href=""
							onClick={() => this.setState({ showSignup: false, showLogin: !this.state.showLogin })}>
							Login
						</a>
						/
						<a
							className="login-link"
							href=""
							nClick={() => this.setState({ showLogin: false, showSignup: !this.state.showSignup })}>
							Sign Up
						</a>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
