import { useEffect, useState, useCallback } from 'react';
import { searchMoviesByName } from 'api/requests';
import MovieList from 'components/MovieList/MovieList';
import useDebounce from 'components/hooks/useDebounce';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const searchQueryDebounce = useDebounce(searchQuery, 200);

  const fetchMovie = useCallback(async () => {
    if (!searchQueryDebounce) {
      return;
    }
    const response = await searchMoviesByName(searchQueryDebounce);
    setMovieList(response);
  }, [searchQueryDebounce]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, searchQueryDebounce]);

  return (
    <>
      <form>
        <input type="text" onChange={e => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <MovieList movieList={movieList} />
    </>
  );
};

export default Movies;
