import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList
        ? movieList.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.name || el.title}</Link>
            </li>
          ))
        : null}
    </ul>
  );
};

export default MovieList;
