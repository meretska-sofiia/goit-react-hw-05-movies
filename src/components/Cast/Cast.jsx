import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { serchMovieCast } from 'api/requests';

import { CastList, CastItem, Image } from './Cast.styled';
import { Container } from 'pages/Layout/Layout.styled';
import image from 'images/images.jpeg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  const fetchCast = useCallback(async () => {
    try {
      const response = await serchMovieCast(movieId);
      setCast(response);
    } catch (error) {
      setError(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  if (error) {
    return (
      <Container>
        <p>Something went wrong...</p>
      </Container>
    );
  }

  return (
    <CastList>
      {cast.length > 0 &&
        cast.map(({ name, profile_path, character, id }) => (
          <CastItem key={id}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : image
              }
              alt={name}
            />
            <div>
              <h2>{name}</h2>

              <p>Character: {character}</p>
            </div>
          </CastItem>
        ))}
    </CastList>
  );
};
export default Cast;
