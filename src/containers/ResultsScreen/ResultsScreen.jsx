import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { connect } from 'react-redux';

class ResultsScreen extends Component {
  render() {
    return (
        <MovieContainer movies={this.props[this.props.section]}
                        section={this.props.section}
                        type='grid'
        />
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

export default connect(mapStateToProps)(ResultsScreen);