import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = props => {
	let userNav = props.user.email && (
		<nav className="nav-section my-lists">
			<h4 className="nav-header">MY LISTS</h4>
			<NavLink className="nav-link" exact to="/favorites">
				<i className="fas fa-star" />Favorites
			</NavLink>
			<NavLink className="nav-link" exact to="/watchlist">
				<i className="fas fa-eye" />Watchlist
			</NavLink>
			<NavLink className="nav-link" exact to="/avoidlist">
				<i className="fas fa-hand-paper" />Avoidlist
			</NavLink>
			<NavLink className="nav-link" exact to="/reviewed">
				<i className="fas fa-clipboard-check" />Reviewed
			</NavLink>
		</nav>
	);

	let filterNav = (
		// find way to add condition around window pathname
		<nav className="nav-section filter">
			<h4 className="nav-header">FILTERS</h4>
			<p role="link" className="nav-link" name="Trending">
				<i className="fas fa-plus" />Genre
			</p>
			<p role="link" className="nav-link" name="Top rated">
				<i className="fas fa-plus" />Avg rating
			</p>
			<p role="link" className="nav-link" name="In theatres">
				<i className="fas fa-plus" />Year
			</p>
		</nav>
	);

	return (
		<aside className="Navigation">
			<nav className="nav-section">
				<NavLink className="nav-link home" exact to="/">
					<i className="fas fa-home" />Home
				</NavLink>
			</nav>
			<nav className="nav-section browse">
				<h4 className="nav-header">BROWSE</h4>
				<NavLink className="nav-link" exact to="/category/trending" name="Trending">
					<i className="fas fa-fire" />Trending
				</NavLink>
				<NavLink className="nav-link" exact to="/category/top_rated" name="Top rated">
					<i className="fas fa-star-half-alt" />Top rated
				</NavLink>
				<NavLink className="nav-link" exact to="/category/now_playing" name="In theatres">
					<i className="fas fa-ticket-alt" />In Theatres
				</NavLink>
				<NavLink className="nav-link" exact to="/category/upcoming" name="Upcoming">
					<i className="fas fa-certificate" />Upcoming
				</NavLink>
			</nav>
			{userNav}
			{filterNav}
		</aside>
	);
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Navigation);
