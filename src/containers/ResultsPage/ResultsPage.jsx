import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';

class ResultsPage extends Component {
  render() {
    return (
      <>
        <MovieContainer movies={this.props.trendingMovies} section="trending" />
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);