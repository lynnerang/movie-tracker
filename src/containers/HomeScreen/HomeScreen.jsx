import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { addTrendingMovies } from '../../actions';
import { addTopRatedMovies } from '../../actions';
import * as cleaners from '../../util/cleaners';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './_HomeScreen.scss';

class HomeScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     authenticated: false
  //   }
  // }

  componentDidMount() {
    this.fetchTrending();
    this.fetchTopRated();
  }

  fetchTrending = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const json = await res.json();
    const trendingMovies = cleaners.cleanMovies(json.results);
    this.props.addTrendingMovies(trendingMovies);
  }

  fetchTopRated = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const json = await res.json();
    const topMovies = cleaners.cleanMovies(json.results);
    this.props.addTopRatedMovies(topMovies);   
  }

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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    trendingMovies: state.trendingMovies,
    topRatedMovies: state.topRatedMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTrendingMovies: movies => dispatch(addTrendingMovies(movies)),
    addTopRatedMovies: movies => dispatch(addTopRatedMovies(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

