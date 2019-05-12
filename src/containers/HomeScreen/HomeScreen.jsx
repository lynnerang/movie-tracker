import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import * as actions from '../../actions';
import { getMovies } from '../../thunks/getMovies';
import { connect } from 'react-redux';
import './_HomeScreen.scss';

export class HomeScreen extends Component {

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

export const mapStateToProps = state => {
	return {
		trendingMovies: state.trendingMovies,
		topRatedMovies: state.topRatedMovies,
		nowPlayingMovies: state.nowPlayingMovies,
    upcomingMovies: state.upcomingMovies,
    user: state.user
	};
};

export const mapDispatchToProps = dispatch => {
  return {
    getMovies: (path, props) => dispatch(getMovies(path, props)),
    login: user => dispatch(actions.login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
