import React from 'react';
import Poster from '../../components/Poster/Poster';
import { Link } from 'react-router-dom';
import './_MovieContainer.scss';

export const MovieContainer = props => {
	const display = props.type === 'grid' ? 'MovieContainer-wrap' : 'MovieContainer-row';

	const posters = props.movies.map(movie => {
		return (
			<Link className="poster-link" to={`/movies/${movie.movie_id}`} key={movie.id}>
				<Poster containerType={props.type} size={props.section} key={movie.id} {...movie} />
			</Link>
		);
  });
  
	return (
		<section className="MovieContainer">
			<h2 className="MovieContainer-title">{props.section.split('_').join(' ')}</h2>
			<div className={display}>{posters}</div>
		</section>
	);
};

export default MovieContainer;
