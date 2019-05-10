import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../containers/UserForm/UserForm';

class Header extends Component {
	state = {
		showLogin: false,
		showSignup: false
	};

	closeUserForm = () => {
		this.setState({ showLogin: false, showSignup: false });
	};

	render() {
		let form = null;

		if (this.state.showLogin) {
			form = <UserForm type="Log In" closeUserForm={this.closeUserForm} />;
		} else if (this.state.showSignup) {
			form = <UserForm type="Sign Up" closeUserForm={this.closeUserForm} />;
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
						<p role="link" className="login-link" onClick={() => this.setState({ showSignup: false, showLogin: true })}>
							Login
						</p>
						/
						<p role="link" className="login-link" onClick={() => this.setState({ showLogin: false, showSignup: true })}>
							Sign Up
						</p>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
