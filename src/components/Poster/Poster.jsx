import React from 'react';
import {Link} from 'react-router-dom'
import './_Poster.scss';

const Poster = props => {
	return (
		<Link to={`/movies/${props.id}`} key={props.id}>
		<article className="Poster">
			<img src={props.poster} alt={`${props.title} poster`} className="Poster-poster" />
			<h3 className="Poster-title">{props.title}</h3>
		</article>
		</Link>
	);
};

export default Poster;
