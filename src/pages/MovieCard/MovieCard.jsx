import { searchMovieById } from 'api/requests';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Container, Image, Navigation, Description } from './MovieCard.styled';
import { StyledLink } from 'pages/Layout/Layout.styled';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');

  const fetchMovie = useCallback(async () => {
    try {
      const response = await searchMovieById(movieId);
      setMovieDetails(response);
    } catch (error) {
      setError(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [movieId, fetchMovie]);

  if (!movieDetails) {
    return;
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <Container>
        <Image
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <Description>
          <h2>
            {movieDetails
              ? `${title}(${new Date(release_date).getFullYear()})`
              : null}
          </h2>
          <p>User score: {Math.ceil(vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
        </Description>
      </Container>
      <div>
        <Navigation>
          <StyledLink to={`cast`}>Cast</StyledLink>
          <StyledLink to={`reviews`}>Reviews</StyledLink>
        </Navigation>
        <Outlet />
      </div>
    </>
  );
};
export default MovieCard;