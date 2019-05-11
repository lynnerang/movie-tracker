import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ResultsScreen from '../../containers/ResultsScreen/ResultsScreen';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
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
					<main className="main-content">
						<Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact
                     path="/category/:id"
                     component={({ match }) => <ResultsScreen section={match.params.id} />}
              />
							<Route
								exact
								path="/movies/:id"
								component={({ match }) => <MovieDetails id={match.params.id} key={match.params.id} />}
							/>
							{/* <Route exact path="/movies/:id" component={MovieDetails} /> */}
						</Switch>
					</main>
				</div>
			</section>
		);
	}
}

export default App;
