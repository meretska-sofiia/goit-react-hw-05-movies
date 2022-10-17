import { searchMovieReview } from 'api/requests';
import { useState, useParams, useCallback, useEffect } from 'react';

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

  //   useEffect(() => {
  //     fetchReview();
  //   }, [fetchReview]);

  if (!review) {
    return;
  }

  return (
    <div>hello</div>
    //     <ul>
    //       {review.map(({ author, content, id }) => (
    //         <li key={id}>
    //           <h2>{author && author}</h2>
    //           <p>{content && content}</p>
    //         </li>
    //       ))}
    //     </ul>
  );
};
export default Reviews;
