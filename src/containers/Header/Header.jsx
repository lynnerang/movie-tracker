import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';
import { connect } from 'react-redux';
import { login, logout } from '../../actions';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    dialog: null
  };

	closeUserForm = () => {
    this.setState({ dialog: null });
  };

  showConf = type => {
    this.setState({ dialog: type });
    setTimeout(() => this.setState({ dialog: null }), 2000);
  }

  logUserOut = () => {
    localStorage.setItem('user', JSON.stringify({ email: '', password: '' }))
    this.showConf('logoutConf');
    this.props.logout();
  }
  
  getLink = () => {
    if (!this.props.user.email) {
      return <>
          <p role="link" className="login-link" onClick={() => this.setState({ dialog: 'loginForm' })}>Login</p>
          /
          <p role="link" className="login-link" onClick={() => this.setState({ dialog: 'signupForm' })}>Sign Up</p>
        </>
    } else {
      return (
        <p role="link" className="login-link" onClick={this.logUserOut}>Log out</p>
      )
    }
  }

  getContent = () => {
    let content;
    const dialog = this.state.dialog;

    if (dialog === 'loginForm') {
      content = <UserForm type="Log In" showConf={this.showConf} closeUserForm={this.closeUserForm} />;
    } else if (dialog === 'signupForm') {
      content = <UserForm type="Sign Up" showConf={this.showConf} closeUserForm={this.closeUserForm} />;
    } else if (dialog === 'loginConf') {
      content = <p className="confirmation">Success! You are now logged in, enjoy your movie browsing!</p>
    } else if (dialog === 'logoutConf') {
      content = <p className="confirmation">You are now logged out of your account.</p>;
    } 
    return content;
  }


  render() {
    const loginLink = this.getLink();
    let content = this.getContent();
    const dialog = this.state.dialog &&
      <div className="popup">
        <div className="dialog">
          <i className="fas fa-times popup-close-btn" onClick={this.closeUserForm} />
          {content}
        </div>
      </div>;
    
		return (
      <header className="top-bar">
        {dialog}
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

Header.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
