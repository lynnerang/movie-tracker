import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import HomeScreen from '../HomeScreen/HomeScreen';
import { addTrendingMovies } from '../../actions';
import * as cleaners from '../../util/cleaners';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './_App.scss';

class App extends Component {


	render() {
		return (
			<section className="App">
				{/* <Nav /> */}
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/:section" component={MovieContainer} />
					<Route
						path="/title/:id"
						render={({ match }) => <MovieDetails id={match.params.id} key={match.params.id} />}
					/>
					<Route exact path="/title/:id" component={MovieDetails} />
					{/* <Route exact path="/account" component={AccountScreen} /> */}
				</Switch>
			</section>
		);
	}
}

export default App;
