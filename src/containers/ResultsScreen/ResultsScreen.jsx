import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { connect } from 'react-redux';

export class ResultsScreen extends Component {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	render() {
		return <MovieContainer movies={this.props[this.props.section]} section={this.props.section} type="grid" />;
	}
}

export const mapStateToProps = state => {
	return {
		trending: state.trendingMovies,
		top_rated: state.topRatedMovies,
		now_playing: state.nowPlayingMovies,
		upcoming: state.upcomingMovies
	};
};

export default connect(mapStateToProps)(ResultsScreen);
