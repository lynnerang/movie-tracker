import React from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import './_HomeScreen.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const HomeScreen = props => {
	return (
		<>
			<MovieContainer movies={props.trendingMovies} section="trending" />
			<MovieContainer movies={props.topRatedMovies} section="top_rated" />
			<MovieContainer movies={props.nowPlayingMovies} section="now_playing" />
			<MovieContainer movies={props.upcomingMovies} section="upcoming" />
		</>
	);
}

export const mapStateToProps = state => {
	return {
		trendingMovies: state.trendingMovies,
		topRatedMovies: state.topRatedMovies,
		nowPlayingMovies: state.nowPlayingMovies,
    upcomingMovies: state.upcomingMovies,
	};
};

HomeScreen.propTypes = {
  trendingMovies: PropTypes.array,
  topRatedMovies: PropTypes.array,
  nowPlayingMovies: PropTypes.array,
  upcomingMovies: PropTypes.array
};


export default connect(mapStateToProps)(HomeScreen);
