import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<aside className="Navigation">
			<nav className="nav-section browse">
				<h4 className="nav-header">BROWSE</h4>
				<NavLink className="nav-link" exact to="/trending">
					Trending
				</NavLink>
        <NavLink className="nav-link" exact to="/top_rated">
          Top rated
				</NavLink>
        <NavLink className="nav-link" exact to="/now_playing">
          In Theatres
				</NavLink>
        <NavLink className="nav-link" exact to="/upcoming">
          Coming soon
				</NavLink>
			</nav>
		</aside>
	);
};

export default Navigation;
