import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		movies: [],
		query: ''
  };
  
  async componentDidMount() {
    console.log(process.env.REACT_APP_API_KEY, process.env.REACT_APP_BASE_URL)
    const test = `${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=indiana`;
    console.log(test);
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const test2 = await fetch(`${BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=indiana`)
    console.log(await test2.json());
  }

	handleChange = e => {
		this.setState({ query: e.target.value });
	};

	handleSubmit = async e => {
		e.preventDefault();
    try {

			const res = await fetch(`${process.env.REACT_APP_BASE_URL}&api_key=${process.env.REACT_APP_API_KEY}`
			);
			// const json = await res.json();
			console.log(res.json());
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="myclass">
				<form onSubmit={this.handleSubmit}>
					<input placeholder="movie title" />
					<input type="submit" value={this.state.query} onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

export default App;
