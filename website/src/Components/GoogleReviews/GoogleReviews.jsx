import React, { useState, useEffect } from 'react';
import './GoogleReviews.modules.css'

// Seu componente para exibir reviews
const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'SUA_API_KEY';  // Substitua com sua chave API
  const PLACE_ID = 'SEU_PLACE_ID';  // Substitua com o Place ID do seu negócio

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews&key=${API_KEY}`
        );
        const data = await response.json();
        setReviews(data.result.reviews);
      } catch (error) {
        console.error('Erro ao carregar reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Carregando reviews...</p>;
  }

  return (
    <div className="google-reviews">
      <h2>O que nossos clientes estão dizendo:</h2>
      {reviews.length === 0 ? (
        <p>Não há reviews disponíveis no momento.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.time}>
              <p><strong>{review.author_name}</strong></p>
              <p>{review.text}</p>
              <p>Classificação: {review.rating} estrelas</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleReviews;
