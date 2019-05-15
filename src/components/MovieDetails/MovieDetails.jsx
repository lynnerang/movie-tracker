import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cleanMovieDetails } from '../../util/cleaners';
import { addFavorite, deleteFavorite, getFavorites } from '../../util/api';
import { addMovieDetails, addFavorites } from '../../actions';
import Loader from '../Loader/Loader';
import StarRatings from 'react-star-ratings';
import './_MovieDetails.scss';
import PropTypes from 'prop-types';

export class MovieDetails extends Component {
	state = {
		details: {},
		loading: false,
		error: ''
	};

	componentDidMount() {
		const details = this.props.movieDetails.find(m => m.movie_id === parseInt(this.props.id));
		if (!details) {
			this.getMovieDetails();
		} else {
			this.setState({ details });
		}
	}

	getMovieDetails = () => {
		const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
		this.setState({ loading: true }, async () => {
			try {
				const res = await fetch(`${REACT_APP_BASE_URL}/movie/${this.props.id}?api_key=${REACT_APP_API_KEY}`);
				const movie = await res.json();
				const details = cleanMovieDetails(movie);
				this.props.addMovieDetails(details);
				this.setState({ details, loading: false });
			} catch (err) {
				this.setState({ error: err });
			}
		});
	};

	handleClick = async () => {
		const res = this.props.favorites.find(m => m.movie_id === parseInt(this.props.id));
		res ? await this.deleteFavorite() : await this.addFavorite();
		const favorites = await getFavorites(this.props.user.id);
		await this.props.addFavorites(favorites.data);
	};

	deleteFavorite = async () => {
		const body = {
			user_id: this.props.user.id,
			movie_id: this.state.details.movie_id
		};
		try {
			await deleteFavorite(body);
		} catch (err) {
			this.setState({ error: err });
		}
	};

	addFavorite = async () => {
		const { title, releaseDate, poster_path, movie_id, rating, description } = this.state.details;
		const body = {
			movie_id,
			user_id: this.props.user.id,
			poster_path,
			release_date: releaseDate,
			vote_average: rating,
			title,
			overview: description
		};

		try {
			await addFavorite(body);
		} catch (err) {
			this.setState({ error: err });
		}
	};

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	render() {
		const {
			title,
			releaseDate,
			runtime,
			poster_path,
			backdrop,
			genres,
			rating,
			language,
			description,
			popularity,
			production,
			boxOffice
		} = this.state.details;

		const btnClass = this.props.favorites.find(m => m.movie_id === parseInt(this.props.id)) ? 'fas favorited' : 'far';

		return (
			<section className="MovieDetails">
				{this.state.loading ? (
					<Loader />
				) : (
					<div>
						<div className="MovieDetails-backdrop">
							<img src={backdrop} alt={`${title} backdrop`} />
						</div>
						<section className="MovieDetails-content">
							<header>
								<h1>
									{title}{' '}
									<span className="MovieDetails-release-date">
										({releaseDate}) <span>{language}</span>
									</span>
								</h1>
								<div className="MovieDetails-genres">
									{genres &&
										genres.map((g, i) => (
											<p className="MovieDetails-genre" key={i}>
												{g}
											</p>
										))}
								</div>
							</header>
							<div className="MovieDetails-grid">
								<main className="MovieDetails-main">
									<img src={poster_path} alt={`${title} poster`} />
									<div className="MovieDetails-metadata">
										<div className="StarRatings-container">
											<StarRatings
												rating={rating / 2 || 0}
												numberOfStars={5}
												starRatedColor="#FFE000"
												starDimension="30px"
											/>
										</div>
										<p className="metadata-header">Runtime:</p>
										<p className="metadata-info">{runtime} minutes</p>
										<p className="metadata-header">Description:</p>
										<p className="metadata-info">{description}</p>
										<p className="metadata-header">Production Companies:</p>
										<p className="metadata-info">{production}</p>
										<p className="metadata-header">Popularity:</p>
										<p className="metadata-info">{popularity}</p>
										<p className="metadata-header">Box Office Gross: </p>
										<p className="metadata-info">${boxOffice}</p>
										{this.props.user.email && (
											<p role="button" onClick={this.handleClick}>
												<i className={`fa-heart ${btnClass}`} />
											</p>
										)
										// <button onClick={this.handleClick}>{buttonText}</button>
										}
									</div>
								</main>
								<section className="MovieDetails-similar">
									<h2>Similar Movies</h2>
								</section>
							</div>
						</section>
					</div>
				)}
			</section>
		);
	}
}

export const mapStateToProps = state => {
	return {
		user: state.user,
		movieDetails: state.movieDetails,
		favorites: state.favorites
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		addMovieDetails: movie => dispatch(addMovieDetails(movie)),
		addFavorites: favorites => dispatch(addFavorites(favorites))
	};
};

MovieDetails.propTypes = {
  addMovieDetails: PropTypes.func,
  addFavorites: PropTypes.func,
  userEmail: PropTypes.object,
  movieDetails: PropTypes.object,
  id: PropTypes.number,
  user: PropTypes.object,
  favorites: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
