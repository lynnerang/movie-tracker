import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
    <aside className="Navigation">
      <nav className="nav-section">
        <NavLink className="nav-link home" exact to="/">
          <i className="fas fa-home"></i>Home
        </NavLink>
      </nav>
      <nav className="nav-section browse">
				<h4 className="nav-header">BROWSE</h4>
				<NavLink className="nav-link" exact to="/trending" name="Trending">
          <i className="fas fa-fire"></i>Trending
				</NavLink>
        <NavLink className="nav-link" exact to="/top_rated" name="Top rated">
          <i className="fas fa-star-half-alt"></i>Top rated
				</NavLink>
        <NavLink className="nav-link" exact to="/now_playing" name="In theatres">
          <i className="fas fa-ticket-alt"></i>In Theatres
				</NavLink>
        <NavLink className="nav-link" exact to="/upcoming" name="Upcoming">
          <i className="fas fa-certificate"></i>Upcoming
				</NavLink>
      </nav>
      <nav className="nav-section my-lists">
        <h4 className="nav-header">MY LISTS</h4>
        <NavLink className="nav-link" exact to="/favorites">
          <i className="fas fa-star"></i>Favorites
				</NavLink>
        <NavLink className="nav-link" exact to="/watchlist">
          <i className="fas fa-eye"></i>Watchlist
				</NavLink>
        <NavLink className="nav-link" exact to="/avoidlist">
          <i className="fas fa-hand-paper"></i>Avoidlist
				</NavLink>
        <NavLink className="nav-link" exact to="/reviewed">
          <i className="fas fa-clipboard-check"></i>Reviewed
				</NavLink>
      </nav>
		</aside>
	);
};

export default Navigation;
