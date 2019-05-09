import React, { Component } from 'react';
import { login, logout } from '../../actions';
import { connect } from 'react-redux';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
  };

	handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await fetch('http://localhost:3000/api/users', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(this.state)
			});
			const json = await res.json();
			const user = json.data;
			this.props.login(user);
		} catch (err) {
			console.log(err.status, err.message);
		}
	};

	render() {
		return (
			<form className="Login" onSubmit={this.handleSubmit}>
				<label htmlFor="Login-email" />
				<input
					type="email"
					name="email"
					placeholder="email"
					value={this.state.email}
					id="Login-email"
					onChange={this.handleChange}
				/>
				<label htmlFor="Login-password" />
				<input
					type="password"
					name="password"
					placeholder="password"
					value={this.state.password}
					id="Login-password"
					onChange={this.handleChange}
				/>
				{/* <input type="text" name="password" value={this.state.password} id="Login-password" onChange={this.handlChange} /> */}
				<input type="submit" value="Sign in" />
			</form>
		);
	}
}

export const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user)),
		logout: () => dispatch(logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
