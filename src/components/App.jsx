import React, { Component } from 'react';
import { addMovies } from '../actions';
import { connect } from 'react-redux';
import './_App.scss';

class App extends Component {
	async componentDidMount() {
		const res = await fetch(`${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=indiana`);
		const json = await res.json();
		this.props.addMovies(json.results);
	}

	render() {
		return <div className="myclass">poop</div>;
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addMovies: movies => dispatch(addMovies(movies))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
