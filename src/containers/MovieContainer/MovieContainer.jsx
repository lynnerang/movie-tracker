import React from 'react';
import Poster from '../../components/Poster/Poster';
import { connect } from 'react-redux';
import './_MovieContainer.scss';

export const MovieContainer = props => {
	const posters = props.movies.slice(0, 6).map(movie => <Poster key={movie.id} {...movie} />);
	return (
		<section className={`MovieContainer ${props.section}`}>
			<h2 className="MovieContainer-section-title">{`${props.section.toUpperCase()}`}</h2>
			<div className="MovieContainer-section">{posters}</div>
		</section>
	);
};

export const mapStateToProps = state => {
	return {
		movies: state.trendingMovies
	};
};

export const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
