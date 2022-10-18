import { searchMovieById } from 'api/requests';
import { useCallback, useRef, useEffect, useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from 'pages/Layout/Layout.styled';
import {
  Image,
  Description,
  Section,
  CardWrapper,
  LingGoBack,
} from './MovieCard.styled';
import { StyledLink } from 'pages/Layout/Layout.styled';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');
  const location = useLocation();
  const refLocation = useRef(location.state?.from);

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

  if (error) {
    return (
      <Container>
        <p>Something went wrong...</p>
      </Container>
    );
  }

  if (!movieDetails) {
    return (
      <Container>
        <p>We don't have any reviews for this movie</p>
      </Container>
    );
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <Section>
        <Container>
          <LingGoBack to={refLocation.current ?? '/'}>Go back</LingGoBack>
          <CardWrapper>
            <Image
              src={
                poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
              }
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
          </CardWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <StyledLink to={'cast'}>Cast</StyledLink>
          <StyledLink to={`reviews`}>Reviews</StyledLink>
        </Container>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
};
export default MovieCard;
