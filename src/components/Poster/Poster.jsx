import React from 'react';
import './_Poster.scss';

const Poster = props => {
	return (
		<article className="Poster">
			<img src={props.poster} alt={`${props.title} poster`} className="Poster-poster" />
			<h3 className="Poster-title">{props.title}</h3>
		</article>
	);
};

export default Poster;
