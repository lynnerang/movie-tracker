import React from 'react';
import Poster from '../../components/Poster/Poster';
import { Link } from 'react-router-dom';
import './_MovieContainer.scss';

export const MovieContainer = props => {
  const posters = props.movies.slice(0, 6).map(movie => {
    return (
      <Link className='poster-link' to={`/title/${movie.id}`} key={movie.id}>
        <Poster size={props.section} key={movie.id} {...movie}  />
      </Link>
    );
  });
	return (
		<section className={`MovieContainer ${props.section}`}>
			<h2 className="MovieContainer-section-title">{`${props.section}`}</h2>
			<div className="MovieContainer-section-row">{posters}</div>
		</section>
	);
};

export default MovieContainer;
