import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import Navigation from '../../containers/Navigation/Navigation';
import ResultsScreen from '../../containers/ResultsScreen/ResultsScreen';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import * as actions from '../../actions';
import { getMovies } from '../../thunks/getMovies';
import { getFavorites } from '../../util/api';
import { Switch, Route } from 'react-router-dom';
import Error from '../../components/Error/Error';
import './_App.scss';
import { connect } from 'react-redux';

class App extends Component {
	componentDidMount() {
		this.props.getMovies('popular', this.props);
		this.props.getMovies('top_rated', this.props);
		this.props.getMovies('now_playing', this.props);
		this.props.getMovies('upcoming', this.props);
		this.checkLogin();
	}

	checkLogin = async () => {
		const user = JSON.parse(localStorage.getItem('user')) || {};
		if (user.email) {
			this.props.login(user);
			const favorites = await getFavorites(user.id);
			this.props.addFavorites(favorites.data);
		}
	};

	render() {
		return (
			<section className="App">
				<Header />
				<div className="below-header">
					<Navigation />
					<main className="main-content">
						<Switch>
							<Route exact path="/" component={HomeScreen} />
							<Route
								exact
								path="/category/:id"
								component={({ match }) => <ResultsScreen section={match.params.id} />}
							/>
							<Route
								exact
								path="/movies/:id"
								component={({ match }) => <MovieDetails id={match.params.id} key={match.params.id} />}
							/>
							<Route exact path="/favorites" component={() => <ResultsScreen section="favorites" />} />
							<Route render={Error} />
						</Switch>
					</main>
				</div>
			</section>
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
		login: user => dispatch(actions.login(user)),
		addFavorites: favorites => dispatch(actions.addFavorites(favorites))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
