import { useEffect, useState, useCallback } from 'react';
import { searchMoviesByName } from 'api/requests';
import MovieList from 'components/MovieList/MovieList';
import { Form, Input, Button } from './Movies.styled';
import { Container } from 'pages/Layout/Layout.styled';

import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const fetchMovie = useCallback(async () => {
    if (!query) {
      return;
    }
    const response = await searchMoviesByName(query);
    setMovieList(response);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };
  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, query]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" onChange={e => setSearchQuery(e.target.value)} />
        <Button type="submit">Search</Button>
      </Form>
      <MovieList movieList={movieList} />
    </Container>
  );
};

export default Movies;
