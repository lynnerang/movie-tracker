import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Login from '../../containers/Login/Login';
import HomeScreen from '../HomeScreen/HomeScreen';
import { Switch, Route } from 'react-router-dom';
import './_App.scss';

class App extends Component {
	render() {
		return (
			<section className="App">
				<Header />
				<div className="below-header">
					<Navigation />
					<main>
						<Switch>
							<Route exact path="/" component={HomeScreen} />
							<Route exact path="/Login" component={Login} />
							<Route exact path="/:section" component={MovieContainer} />
							<Route
								exact
								path="/title/:id"
								component={({ match }) => <MovieDetails id={match.params.id} key={match.params.id} />}
							/>
							<Route exact path="/title/:id" component={MovieDetails} />
							{/* <Route exact path="/account" component={AccountScreen} /> */}
						</Switch>
					</main>
				</div>
			</section>
		);
	}
}

export default App;
