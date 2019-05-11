import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { connect } from 'react-redux';

class ResultsScreen extends Component {
  render() {
    console.log(this.props.section)
    return (
      <>
        <MovieContainer movies={this.props[this.props.section]} section={this.props.section} type='grid' />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    trending: state.trendingMovies,
    top_rated: state.topRatedMovies,
    now_playing: state.nowPlayingMovies,
    upcoming: state.upcomingMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);