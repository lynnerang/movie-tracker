import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { addTrendingMovies, addTopRatedMovies, addNowPlayingMovies, addUpcomingMovies } from '../../actions';
import * as cleaners from '../../util/cleaners';
import { fetchMovies } from '../../util/api';
import { connect } from 'react-redux';
import './_HomeScreen.scss';

class HomeScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
      authenticated: false,
      newUser: false
	  }
	}

	componentDidMount() {
		this.getMovies('popular');
		this.getMovies('top_rated');
		this.getMovies('now_playing');
		this.getMovies('upcoming');
	}

	getMovies = async path => {
		try {
			const res = await fetchMovies(path);
			const movies = cleaners.cleanMovies(res.results);
			this.updateMovieData(movies, path);
		} catch (err) {
			console.log(err);
		}
	};

	updateMovieData = (movies, state) => {
		const {
			trendingMovies,
			topRatedMovies,
			nowPlayingMovies,
			upcomingMovies,
			addTrendingMovies,
			addTopRatedMovies,
			addNowPlayingMovies,
			addUpcomingMovies
		} = this.props;

		switch (state) {
			case 'popular':
				!trendingMovies.length && addTrendingMovies(movies);
			case 'top_rated':
				!topRatedMovies.length && addTopRatedMovies(movies);
			case 'now_playing':
				!nowPlayingMovies.length && addNowPlayingMovies(movies);
			case 'upcoming':
				!upcomingMovies.length && addUpcomingMovies(movies);
			default:
				break;
		}
	};

	render() {
		// let content;
		// if (!this.state.authenticated) {
		//   content = 'SIGN IN, LOSER'
		// } else {
		//   content = 'GOOD JOB, LOSER'
		// }

		return (
			<main>
				<h1>MovieTracker</h1>
				<MovieContainer movies={this.props.trendingMovies} section="trending" />
				<MovieContainer movies={this.props.topRatedMovies} section="top-rated" />
				<MovieContainer movies={this.props.nowPlayingMovies} section="now-playing" />
				<MovieContainer movies={this.props.upcomingMovies} section="upcoming" />
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		trendingMovies: state.trendingMovies,
		topRatedMovies: state.topRatedMovies,
		nowPlayingMovies: state.nowPlayingMovies,
		upcomingMovies: state.upcomingMovies
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addTrendingMovies: movies => dispatch(addTrendingMovies(movies)),
		addTopRatedMovies: movies => dispatch(addTopRatedMovies(movies)),
		addNowPlayingMovies: movies => dispatch(addNowPlayingMovies(movies)),
		addUpcomingMovies: movies => dispatch(addUpcomingMovies(movies))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
