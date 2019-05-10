import React from 'react';
import './_Poster.scss';

const Poster = props => {
  const classes = props.size === 'trending' ? 'Poster trending'
    : 'Poster';

	return (
		<article className={classes}>
			<img src={props.poster} alt={`${props.title} poster`} className="Poster-poster" />
			<h3 className="Poster-title">{props.title}</h3>
		</article>
	);
};

export default Poster;
