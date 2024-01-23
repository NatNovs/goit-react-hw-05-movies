import { useLocation } from 'react-router-dom' 
import PropTypes from 'prop-types';

import { List, Item, MovieLink } from './MoviesList.styled';


const MoviesList = ({ movies }) => {
  const location = useLocation(); 

  return (
    <List> 
      {movies.length > 0 && 
      movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
            </MovieLink>
          </Item>
        );
      })}
    </List>

  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;

