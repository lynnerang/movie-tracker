export const cleanMovies = movies => {
	return movies.map(movie => {
		return {
			poster: movie.poster_path ? `${process.env.REACT_APP_BASE_IMAGE_URL}/w300${movie.poster_path}` : null,
			id: movie.id,
			title: movie.title
		};
	});
};

export const cleanMovieDetails = movie => {
	return {
		favorite: false,
		poster: movie.poster_path ? `${process.env.REACT_APP_BASE_IMAGE_URL}/w342${movie.poster_path}` : null,
		backdrop: movie.backdrop_path ? `${process.env.REACT_APP_BASE_IMAGE_URL}/w1280${movie.backdrop_path}` : null,
		genres: movie.genres.map(g => g.name).sort(),
		id: movie.id,
		rating: movie.vote_average,
		title: movie.original_title,
		language: movie.original_language.toUpperCase(),
		releaseDate: movie.release_date.slice(0, 4),
		description: movie.overview,
		runtime: movie.runtime,
		popularity: movie.popularity,
		production: movie.production_companies.map(c => c.name).join(', '),
		boxOffice: movie.revenue,
		cast: '/credits',
		recommendatoins: '/recommendations'
	};
};
