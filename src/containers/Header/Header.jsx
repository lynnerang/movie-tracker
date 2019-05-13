import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';
import { connect } from 'react-redux';
import { login, logout } from '../../actions'

class Header extends Component {
	state = {
		showLogin: false,
    showSignup: false,
    showLogout: false
  };

	closeUserForm = () => {
		this.setState({ showLogin: false, showSignup: false });
  };

  logUserOut = () => {
    this.setState({ showLogout: true });
    localStorage.setItem('user', JSON.stringify({ email: '', password: '' }))
    this.props.logout();
    setTimeout(() => this.setState({ showLogout: false }), 2000);
  }

  getLogoutConf = () => {
    return <div className="popup">
      <div className="dialog">
        <i className="fas fa-times popup-close-btn" onClick={() => this.setState({showLogout: false})} />
        <h3 className="dialog-header">Log Out</h3>
        <p className="confirmation">You are now logged out of your account.</p>
      </div>
    </div>
  }
  
  getLink = () => {
    if (!this.props.user.email) {
      return (
        <>
          <p role="link" className="login-link" onClick={() => this.setState({ showSignup: false, showLogin: true })}>Login</p>
          /
          <p role="link" className="login-link" onClick={() => this.setState({ showLogin: false, showSignup: true })}>Sign Up</p>
        </>
      )
    } else {
      return (
        <p role="link" className="login-link" onClick={this.logUserOut}>Log out</p>
      )
    }
  }

  getFormType = () => {
    if (this.state.showLogin) {
      return <UserForm type="Log In" closeUserForm={this.closeUserForm} />;
    } else if (this.state.showSignup) {
      return <UserForm type="Sign Up" closeUserForm={this.closeUserForm} />;
    } else {
      return null;
    }
  }

  render() {
    const form = this.getFormType();
    const loginLink = this.getLink();
    const logoutConf = this.state.showLogout ? this.getLogoutConf() : null;
    
		return (
      <header className="top-bar">
        {logoutConf}
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
            {loginLink}
					</div>
				</div>
			</header>
		);
	}
}

export const mapStateToProps = state => ({ user: state.user });

export const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
