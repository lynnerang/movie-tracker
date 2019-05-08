export const cleanMovies = (movies, configUrl) => {
	return movies.map(movie => {
		return {
			poster: movie.poster_path ? `${process.env.REACT_APP_BASE_IMAGE_URL}w300${movie.poster_path}` : null,
			id: movie.id,
			title: movie.title
			// releaseDate: movie.release_date
		};
	});
};

export const cleanMovieDetails = (movie, configUrl) => {
	return {
		poster: movie.poster_path ? `${process.env.REACT_APP_BASE_IMAGE_URL}w500${movie.poster_path}` : null,
		backdrop: movie.backdrop_path ? `${process.env.REACT_APP_BASE_IMAGE_URL}w1280${movie.backdrop_path}` : null,
		genres: movie.genres.map(genre => genre.name).join(', '),
		id: movie.id,
		rating: movie.vote_average,
		title: movie.original_title,
		language: movie.original_language,
		releaseDate: movie.release_date,
		description: movie.overview,
		runtime: movie.runtime,
		popularity: movie.popularity,
		productionCompanies: movie.production_companies.map(c => c.name).join(', '),
		boxOffice: movie.revenue,
		cast: '/credits',
		recommendatoins: '/recommendations'
	};
};
