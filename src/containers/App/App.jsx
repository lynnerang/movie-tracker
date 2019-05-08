import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { addTrendingMovies } from '../../actions';
import * as cleaners from '../../util/cleaners';
import { connect } from 'react-redux';
import './_App.scss';

class App extends Component {
	async componentDidMount() {
		const res = await fetch(
			`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&query=indiana`
		);
		const json = await res.json();
		const trendingMovies = cleaners.cleanMovies(json.results);
		this.props.addTrendingMovies(trendingMovies);
	}

	render() {
		return (
			<section className="App">
				<h1>MovieTracker</h1>
				<MovieContainer section="trending" />
				<MovieContainer section="trending" />
				<MovieContainer section="trending" />
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addTrendingMovies: movies => dispatch(addTrendingMovies(movies))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
