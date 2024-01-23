import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchResult } from 'services/services';
import Loader from 'components/Loader/Loader';
import Form from 'components/Form/Form'; 
import MoviesList from 'components/MoviesList/MoviesList';
import { MoviesBox } from './Movies.styled'; 

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [requestFall, setRequestFall] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
     }
    setLoading(true);
    const answer = fetchSearchResult(query)
      .then(foundedMovies => {
        setMovies(foundedMovies);
        setRequestFall(foundedMovies.length === 0)
      })

      .catch(error => {
        console.error(error.message);
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
      });
      console.log(answer)
  }, [query]);
  

  const setParams = query => {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
    // console.log(params)
  };

  return (
    <MoviesBox>
      <Form setParams={setParams} />
      {loading && <Loader />}
      {requestFall && (<h1>No movies with this request. Please, try again</h1>) }
      {(query && movies.length > 0) && <h1>Found movies</h1>}
      {!!movies.length && <MoviesList movies={movies} />}
    </MoviesBox>
  );
};

export default Movies;
