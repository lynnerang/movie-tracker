import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cleanMovieDetails } from '../../util/cleaners';
import { addFavorite, deleteFavorite } from '../../util/api';
import Loader from '../Loader/Loader';
import './_MovieDetails.scss';

class MovieDetails extends Component {
	state = {
		details: {},
		loading: false
	};

	componentDidMount() {
		const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
		this.setState({ loading: true }, async () => {
			try {
				const res = await fetch(`${REACT_APP_BASE_URL}/movie/${this.props.id}?api_key=${REACT_APP_API_KEY}`);
				const movie = await res.json();
				const details = cleanMovieDetails(movie);
				this.setState({ details, loading: false });
			} catch (err) {
				console.log(err);
			}
		});
	}

	handleClick = () => {
		this.addFavorite();
	};

	deleteFavorite = async () => {
		const body = {
			user_id: this.props.user.id,
			movie_id: this.state.details.movie.id
		};
		try {
			const res = await deleteFavorite(body);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	addFavorite = async () => {
		const { title, releaseDate, poster, id, rating, description } = this.state.details;
		const body = {
			movie_id: id,
			user_id: this.props.user.id,
			poster_path: poster,
			release_date: releaseDate,
			vote_average: rating,
			title,
			overview: description
		};

		try {
			const res = await addFavorite(body);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const {
			title,
			releaseDate,
			runtime,
			poster,
			backdrop,
			genres,
			rating,
			language,
			description,
			popularity,
			production,
			boxOffice
		} = this.state.details;

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
									<img src={poster} alt={`${title} poster`} />
									<div className="MovieDetails-metadata">
										<p className="metadata-header">Rating:</p>
										<p className="metadata-info">{rating}</p>
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
										{this.props.user.email && <button onClick={this.handleClick}>Favorite</button>}
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
		user: state.user
	};
};

export const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
