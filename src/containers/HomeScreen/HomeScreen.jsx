import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import * as actions from '../../actions';
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
				break;
			case 'top_rated':
				!topRatedMovies.length && addTopRatedMovies(movies);
				break;
			case 'now_playing':
				!nowPlayingMovies.length && addNowPlayingMovies(movies);
				break;
			case 'upcoming':
				!upcomingMovies.length && addUpcomingMovies(movies);
				break;
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
			<>
				<h1>MovieTracker</h1>
				<MovieContainer movies={this.props.trendingMovies} section="trending" />
				<MovieContainer movies={this.props.topRatedMovies} section="top-rated" />
				<MovieContainer movies={this.props.nowPlayingMovies} section="now-playing" />
				<MovieContainer movies={this.props.upcomingMovies} section="upcoming" />
			</>
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
		addTrendingMovies: movies => dispatch(actions.addTrendingMovies(movies)),
		addTopRatedMovies: movies => dispatch(actions.addTopRatedMovies(movies)),
		addNowPlayingMovies: movies => dispatch(actions.addNowPlayingMovies(movies)),
		addUpcomingMovies: movies => dispatch(actions.addUpcomingMovies(movies))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
