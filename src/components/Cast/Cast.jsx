import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { fetchCast } from 'services/services'; 
import imgnf from '../../pages/img/imgnf.jpg'
import { CastInfo, CastItem } from './Cast.styled';


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
      .then(credits => setCast(credits.cast))
      .catch(error => {
        console.error(error.message);
        setCast([]);
      });
  }, [movieId]);

  const imageUrl = 'https://image.tmdb.org/t/p/w300'; 
  return (
    <ul>
      {cast.map(({ id, profile_path, original_name, name, character }) => (
        <CastItem key={id}>
      
            <img
              src={profile_path 
                ? `${imageUrl}${profile_path}`
                : imgnf}
              alt={original_name}
              width="120"
            />
      
          <CastInfo>
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
            <b>Character:</b> {character}
            </p>
          </CastInfo>
        </CastItem>
      ))}
    </ul>
  );
};
export default Cast;

