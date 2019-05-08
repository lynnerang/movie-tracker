import React from 'react';
import './_Movie.scss';

const Movie = props => {
	return (
		<article className="Movie">
			<img src={props.poster} alt={`${props.title} poster`} className="Movie-poster" />
			<h3 className="Movie-title">{props.title}</h3>
		</article>
	);
};

export default Movie;
