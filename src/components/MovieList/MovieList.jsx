import { useLocation } from 'react-router-dom';
import { List, Item, StyledLink } from './MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <List>
      {movieList
        ? movieList.map(el => (
            <Item key={el.id}>
              <StyledLink to={`/movies/${el.id}`} state={{ from: location }}>
                {el.name || el.title}
              </StyledLink>
            </Item>
          ))
        : null}
    </List>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape),
};

export default MovieList;
