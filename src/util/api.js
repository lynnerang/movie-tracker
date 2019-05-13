export const fetchMovies = async path => {
	const res = await fetch(`${process.env.REACT_APP_BASE_URL}/movie/${path}?api_key=${process.env.REACT_APP_API_KEY}`);
	if (!res.ok) {
		throw new Error('Failed to fetch movie data.');
	}
	return await res.json();
};

export const fetchUser = async (body, dir) => {
	const res = await fetch(`http://localhost:3000/api/users/${dir}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!res.ok) {
		throw new Error('Failed to post user data.');
	}
	return await res.json();
};

export const addFavorite = async body => {
	const res = await fetch('http://localhost:3000/api/users/favorites/new', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!res.ok) {
		throw new Error('Could not add favorite');
	}
	return await res.json();
};

export const deleteFavorite = async body => {
	const { user_id, movie_id } = body;
	console.log(user_id, movie_id);
	const res = await fetch(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	});
	if (!res.ok) {
		throw new Error('Could not delete favorite');
	}
	return res.json();
};

export const getFavorites = async userId => {
	const res = await fetch(`http://localhost:3000/api/users/${userId}/favorites`);
	if (!res.ok) {
		throw new Error('Could not add favorite');
	}
	return await res.json();
};
