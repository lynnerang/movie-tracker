import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import * as actions from '../../actions';
import * as cleaners from '../../util/cleaners';
import { fetchMovies } from '../../util/api';
import { getMovies } from '../../thunks/getMovies';
import { connect } from 'react-redux';
import './_HomeScreen.scss';

class HomeScreen extends Component {

	componentDidMount() {
		this.props.getMovies('popular', this.props);
		this.props.getMovies('top_rated', this.props);
		this.props.getMovies('now_playing', this.props);
    this.props.getMovies('upcoming', this.props);
    this.checkLogin();
  }
  
  checkLogin = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (user.email) {
      this.props.login(user);
    }
  }

	// getMoviesOld = async path => {
	// 	try {
	// 		const res = await fetchMovies(path);
	// 		const movies = cleaners.cleanMovies(res.results);
	// 		this.updateMovieData(movies, path);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// updateMovieDataOld = (movies, state) => {
	// 	const {
	// 		trendingMovies,
	// 		topRatedMovies,
	// 		nowPlayingMovies,
	// 		upcomingMovies,
	// 		addTrendingMovies,
	// 		addTopRatedMovies,
	// 		addNowPlayingMovies,
	// 		addUpcomingMovies
	// 	} = this.props;

	// 	switch (state) {
	// 		case 'popular':
	// 			!trendingMovies.length && addTrendingMovies(movies);
	// 			break;
	// 		case 'top_rated':
	// 			!topRatedMovies.length && addTopRatedMovies(movies);
	// 			break;
	// 		case 'now_playing':
	// 			!nowPlayingMovies.length && addNowPlayingMovies(movies);
	// 			break;
	// 		case 'upcoming':
	// 			!upcomingMovies.length && addUpcomingMovies(movies);
	// 			break;
	// 		default:
	// 			break;
  //   }
	// };

  render() {
		return (
			<>
				<MovieContainer movies={this.props.trendingMovies} section="trending" />
				<MovieContainer movies={this.props.topRatedMovies} section="top_rated" />
				<MovieContainer movies={this.props.nowPlayingMovies} section="now_playing" />
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
    upcomingMovies: state.upcomingMovies,
    user: state.user
	};
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (path, props) => dispatch(getMovies(path, props)),
    login: user => dispatch(actions.login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
