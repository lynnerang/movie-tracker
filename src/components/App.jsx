import React, { Component } from 'react';
import { addMovies } from '../actions';
import * as cleaners from '../util/cleaners';
import { connect } from 'react-redux';
import './_App.scss';

class App extends Component {
	async componentDidMount() {
		const res = await fetch(
			`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=indiana`
		);
		const json = await res.json();
		const movies = cleaners.cleanMovies(json.results);
		this.props.addMovies(movies);
	}

	fetchImages = movies => {
		return movies.map(movie => {
			let posterPath;
			if (movie.poster_path) {
				posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
			}
			return { ...movie, poster_path: posterPath };
		});
	};

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
