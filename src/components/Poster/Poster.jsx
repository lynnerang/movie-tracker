import React, { Component } from 'react';
import { connect } from 'react-redux';
import './_Poster.scss';

class Poster extends Component {
	render() {
		const favorited = this.props.favorites.find(m => m.movie_id === this.props.movie_id) ? 'favorited-poster' : null;

		const classes =
			this.props.size === 'trending' && this.props.containerType !== 'grid' ? 'Poster trending' : 'Poster';

		return (
			<article className={classes}>
				<img src={this.props.poster_path} alt={`${this.props.title} poster`} className={`Poster-poster ${favorited}`} />
				<h3 className="Poster-title">{this.props.title}</h3>
			</article>
		);
	}
}

export const mapStateToProps = state => {
	return {
		favorites: state.favorites
	};
};

export default connect(mapStateToProps)(Poster);
