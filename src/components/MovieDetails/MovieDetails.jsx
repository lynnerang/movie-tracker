import React, { Component } from 'react';
import { cleanMovieDetails } from '../../util/cleaners';

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

	render() {
		const {
			title,
			releaseDate,
			runtime,
			poster,
			backdrop,
			genres,
			id,
			rating,
			language,
			description,
			popularity,
			production,
			boxOffice
		} = this.state.details;

		return (
			<section>
				{this.state.loading ? (
					<h1>Loading...</h1>
				) : (
					<header>
						<h1>{title}</h1>
						<img src={poster} alt={`${title} poster`} />
						<img src={backdrop} alt={`${title} backdrop`} />
						<p>Release Date: {releaseDate}</p>
						<p>Genre(s): {genres}</p>
						<p>Runtime: {runtime}</p>
						<p>Rating: {rating}</p>
						<p>Language: {language}</p>
						<p>Description: {description}</p>
						<p>Production Companies: {production}</p>
						<p>Popularity: {popularity}</p>
						<p>Box Office Gross: ${boxOffice}</p>
					</header>
				)}
			</section>
		);
	}
}

export default MovieDetails;
