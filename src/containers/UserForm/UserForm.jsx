import React, { Component } from 'react';
import { login, logout, addFavorites } from '../../actions';
import { connect } from 'react-redux';
import { fetchUser, getFavorites } from '../../util/api';
import PropTypes from 'prop-types';

export class UserForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		showErr: false
  };

	getName = () => {
		return (
			<div>
				<label htmlFor="user-name" />
				<input
					className="detail-input"
					name="name"
					placeholder="name"
					value={this.state.name}
					id="user-name"
					onChange={this.handleChange}
				/>
			</div>
		);
  };

  getErrorMsg = () => {
		const msg = this.props.type === 'Log In' ? 'Incorrect email or password. Please try again.'
			: 'Email already exists as an account.Please log in.';

		return <p className="error">{msg}</p>;
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { name, email, password } = this.state;

		this.props.type === 'Log In'
			? this.getUser({ email, password }, '')
			: this.getUser({ name, email, password }, 'new');
	};

  getUser = async (body, dir) => {
		try {
			const result = await fetchUser(body, dir);
			this.logUserIn(result, body);
			this.setState({ showErr: false });
		} catch (err) {
			console.log(err.status, err.message);
			this.setState({ showErr: true });
		}
	};

  logUserIn = async (result, body) => {
    let userData;
		if (this.props.type === 'Log In') {
			userData = result.data;
		} else {
      userData = { id: result.id, email: body.email, name: body.name };
    }
    this.props.login(userData);
    localStorage.setItem('user', JSON.stringify(userData));

		const favorites = await getFavorites(this.props.user.id);
		this.props.addFavorites(favorites.data);
    this.setState({ name: '', email: '', password: '' });

    this.props.showConf('loginConf');
	};

  render() {
    const errMsg = this.state.showErr ? this.getErrorMsg() : null;
    const disable = this.props.type === 'Sign Up' ? !this.state.name || !this.state.email || !this.state.password : !this.state.email || !this.state.password;
    const name = this.props.type === 'Sign Up' ? this.getName() : null;

    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <h3 className="dialog-header">{this.props.type}</h3>
        <h4 className="form-header">Enter your details:</h4>
        <label htmlFor="user-email" />
        {name}
        <input
          className="detail-input"
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          id="user-email"
          onChange={this.handleChange}
        />
        <label htmlFor="user-password" />
        <input
          className="detail-input"
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          id="user-password"
          onChange={this.handleChange}
        />
        <input className="login-form-btn" type="submit" value={this.props.type} disabled={disable} />
        {errMsg}
      </form>
    );
	}
}

export const mapStateToProps = state => ({ user: state.user });

export const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user)),
		logout: () => dispatch(logout()),
		addFavorites: favorites => dispatch(addFavorites(favorites))
	};
};

UserForm.propTypes = {
  type: PropTypes.string,
  user: PropTypes.object,
  addFavorites: PropTypes.func,
  login: PropTypes.func,
  getMovies: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
