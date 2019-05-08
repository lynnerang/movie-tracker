import React, { Component } from 'react';

class MovieDetails extends Component {
	state = {
		details: {},
		loading: false
	};

	componentDidMount() {
		const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
		this.setState({ loading: true }, async () => {
			try {
				const res = await fetch(`${REACT_APP_BASE_URL}/movie/${this.props.id}?api_key=${REACT_APP_API_KEY}`);
				const json = await res.json();
				console.log(json.results);
				this.setState({ loading: false });
			} catch (err) {
				console.log(err);
			}
		});
	}

	render() {
		const display = this.state.loading ? <h1>Loading...</h1> : <h1>Done.</h1>;
		return <section>{display}</section>;
	}
}

export default MovieDetails;
