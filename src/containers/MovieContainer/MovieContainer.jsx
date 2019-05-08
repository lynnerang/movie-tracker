import React from 'react';
import Movie from '../../components/Movie/Movie';
import { connect } from 'react-redux';
import './_MovieContainer.scss';

export const MovieContainer = props => {
	const movies = props.movies.slice(0, 6).map(movie => <Movie key={movie.id} {...movie} />);
	return (
		<section className={`MovieContainer ${props.classList}`}>
			<h2 className='MovieContainer-section-title'>{`${props.classList.toUpperCase()}`}</h2>
			<div className='MovieContainer-section'>
			{movies}
			</div>
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
