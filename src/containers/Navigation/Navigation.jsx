import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
  state = {
    genres: [],
    showGenres: false,
    filters: []
  }

  componentDidMount() {
    this.getGenreData();
  }

  getGenreData = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => this.setState({ genres: result.genres }))
      .catch(err => console.log(err))
  }

  getUserNav = () => {
    return <nav className="nav-section my-lists">
        <h4 className="nav-header">MY LISTS</h4>
        <NavLink className="nav-link" exact to="/favorites">
          <i className="fas fa-star"></i>Favorites
			</NavLink>
        <p className="nav-link disabled" exact to="">
          <i className="fas fa-eye"></i>Watchlist
			</p>
        <p className="nav-link disabled" exact to="">
          <i className="fas fa-hand-paper"></i>Avoidlist
			</p>
        <p className="nav-link disabled" exact to="">
          <i className="fas fa-clipboard-check"></i>Reviewed
			</p>
      </nav>;
  }
  
  getFilterNav = () => {
    const genreOptions = this.state.showGenres ? this.state.genres.map(i => <div className="filter-option"><input type="checkbox" id={i.name} /><label htmlFor={i.name}>{i.name}</label></div>) : null;

    return <nav className="nav-section filter">
      <h4 className="nav-header">FILTERS</h4>
      <p role="link" className="nav-link" name="Trending" onClick={() => this.setState({showGenres: !this.state.showGenres})}>
        <i className="fas fa-plus"></i>Genre
      </p>
      {genreOptions}
      <p role="link" className="nav-link" name="Top rated">
        <i className="fas fa-plus"></i>Avg rating
      </p>
      <p role="link" className="nav-link" name="In theatres">
        <i className="fas fa-plus"></i>Year
      </p>
    </nav>;
  }

  render() {
    const userNav = this.props.user.email && this.getUserNav();
    // add condition for something like pathname below
    const filterNav = this.getFilterNav();
    
    return (
      <aside className="Navigation">
        <nav className="nav-section">
          <NavLink className="nav-link home" exact to="/">
            <i className="fas fa-home"></i>Home
        </NavLink>
        </nav>
        <nav className="nav-section browse">
          <h4 className="nav-header">BROWSE</h4>
          <NavLink className="nav-link" exact to="/category/trending" name="Trending">
            <i className="fas fa-fire"></i>Trending
				</NavLink>
          <NavLink className="nav-link" exact to="/category/top_rated" name="Top rated">
            <i className="fas fa-star-half-alt"></i>Top rated
				</NavLink>
          <NavLink className="nav-link" exact to="/category/now_playing" name="In theatres">
            <i className="fas fa-ticket-alt"></i>In Theatres
				</NavLink>
          <NavLink className="nav-link" exact to="/category/upcoming" name="Upcoming">
            <i className="fas fa-certificate"></i>Upcoming
				</NavLink>
        </nav>
        {userNav}
        {filterNav}
      </aside>
    );
  }
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Navigation);
