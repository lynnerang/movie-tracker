import React from 'react';
import Poster from '../../components/Poster/Poster';
import { Link } from 'react-router-dom';
import './_MovieContainer.scss';
import PropTypes from 'prop-types';

export const MovieContainer = props => {
	const display = props.type === 'grid' ? 'MovieContainer-wrap' : 'MovieContainer-row';

	const posters = props.movies.map(movie => {
		return (
			<Link className="poster-link" to={`/movies/${movie.movie_id}`} key={movie.movie_id}>
        <Poster containerType={props.type} size={props.section} key={`poster${movie.movie_id}`} {...movie} />
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

MovieContainer.propTypes = {
  type: PropTypes.string,
  section: PropTypes.string
};

export default MovieContainer;
