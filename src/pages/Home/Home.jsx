import { searchPopularMovies } from 'api/requests';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect, useCallback } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);

  const fetchTrendingMovie = useCallback(async () => {
    const response = await searchPopularMovies();
    setMovies(response);
  }, []);

  useEffect(() => {
    fetchTrendingMovie();
  }, [fetchTrendingMovie]);

  return <>{movies ? <MovieList movieList={movies} /> : null}</>;
};

export default Home;
