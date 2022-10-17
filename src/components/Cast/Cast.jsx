import { serchMovieCast } from 'api/requests';
import { useState, useEffect, useCallback, useParams } from 'react';
import { CastList, CastItem, Image } from './Cast.styled';

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

  if (!cast) {
    return;
  }

  return (
    <CastList>
      {cast.map(({ name, profile_path, character, id }) => (
        <CastItem key={id}>
          <Image
            src={
              profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt={name}
          />
          <h2>{name}</h2>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};
export default Cast;
