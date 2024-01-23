import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns'
import { fetchReviews } from 'services/services';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(results => setReviews(results))
      .catch(error => {
        console.error(error.message);
        setReviews([]);
      });
  }, [movieId]);

  
    function formatDate(dateString) {
      const date = new Date(dateString);
      const formatDate = format(date, "yyyy-MM-dd (HH:mm:ss)")
      return formatDate;

  }

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>Date of create: {formatDate(review.created_at)}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>SORRY! But We don't have any revies for this movie</p>
      )}
    </>
  );
};

export default Reviews;

