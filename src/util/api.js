export const fetchMovies = async path => {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/${path}?api_key=${process.env.REACT_APP_API_KEY}`
  )
  if (!res.ok) {
    throw new Error('Can\'t fetch movies.');
  } 
  return await res.json();
}