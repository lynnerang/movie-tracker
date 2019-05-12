import React from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { connect } from 'react-redux';

const ResultsScreen = props => {
	return <MovieContainer movies={props[props.section]} section={props.section} type="grid" />;
};

export const mapStateToProps = state => {
	return {
		trending: state.trendingMovies,
		top_rated: state.topRatedMovies,
		now_playing: state.nowPlayingMovies,
		upcoming: state.upcomingMovies
	};
};

export default connect(mapStateToProps)(ResultsScreen);
