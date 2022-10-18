import { searchMovieReview } from 'api/requests';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Reviews.styled';
import { Container } from 'pages/Layout/Layout.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  const fetchReview = useCallback(async () => {
    try {
      const response = await searchMovieReview(movieId);
      setReview(response);
    } catch (error) {
      setError(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchReview();
  }, [fetchReview]);

  if (error) {
    return (
      <Container>
        <p>Something went wrong...</p>
      </Container>
    );
  }

  if (!review) {
    return (
      <Container>
        <p>We don't have any reviews for this movie</p>
      </Container>
    );
  }

  return (
    <Container>
      {review.length !== 0 ? (
        <List>
          {review.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author && author}</h2>
              <p>{content && content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </Container>
  );
};
export default Reviews;
