import { useState, useEffect, useCallback } from 'react';

import { searchPopularMovies } from 'api/requests';
import MovieList from 'components/MovieList/MovieList';

import { Title } from './Home.styled';
import { Container } from 'pages/Layout/Layout.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);

  const fetchTrendingMovie = useCallback(async () => {
    const response = await searchPopularMovies();
    setMovies(response);
  }, []);

  useEffect(() => {
    fetchTrendingMovie();
  }, [fetchTrendingMovie]);

  return (
    <Container>
      <Title>Trending today:</Title>
      {movies && <MovieList movieList={movies} />}
    </Container>
  );
};

export default Home;
