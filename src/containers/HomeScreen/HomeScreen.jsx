import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { addTrendingMovies } from '../../actions';
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

  async componentDidMount() {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const json = await res.json();
    const trendingMovies = cleaners.cleanMovies(json.results);
    this.props.addTrendingMovies(trendingMovies);
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
        <MovieContainer section="trending" />
      </>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     movies: state.movies
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addTrendingMovies: movies => dispatch(addTrendingMovies(movies))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default HomeScreen;