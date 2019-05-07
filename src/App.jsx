import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		movies: [],
		query: ''
	};

  async componentDidMount() {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=indiana`);
    const json = await res.json()
    console.log(json.results)
  }
  
	handleChange = e => {
		this.setState({ query: e.target.value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await fetch(`${process.env.REACT_APP_BASE_URL}&api_key=${process.env.REACT_APP_API_KEY}`);
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
