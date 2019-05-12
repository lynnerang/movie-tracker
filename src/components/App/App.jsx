import React from 'react';
import Header from '../../containers/Header/Header';
import Navigation from '../../containers/Navigation/Navigation';
import ResultsScreen from '../../containers/ResultsScreen/ResultsScreen';
import MovieDetails from '../MovieDetails/MovieDetails';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import { Switch, Route } from 'react-router-dom';
import './_App.scss';

const App = () => {
	return (
		<section className="App">
			<Header />
			<div className="below-header">
				<Navigation />
				<main className="main-content">
					<Switch>
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/category/:id" component={({ match }) => <ResultsScreen section={match.params.id} />} />
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
};

export default App;
