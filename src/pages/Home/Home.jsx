import { useEffect, useState } from 'react' 
import { fetchTrending } from 'services/services'; 
import { HomeBox, HomeTitle } from './Home.styled'; 
import MoviesList from 'components/MoviesList/MoviesList'; 

const Home = () => {
const [movies, setMovies] = useState ([]);

useEffect(() => {
  fetchTrending ()
  .then(answer => {setMovies(answer)
  })
  .catch(error => console.error(error.message));
}, []);

return (
  <HomeBox>
    <HomeTitle>Trending movies</HomeTitle>
    {!!movies.length && <MoviesList movies={movies}/>}
  </HomeBox>
);
};

export default Home;

