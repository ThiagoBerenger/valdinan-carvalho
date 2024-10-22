import React, { useEffect, useState } from 'react';
import './GoogleReviews.modules.css'; // Importe seu CSS se necessário

const GoogleReviews = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Verifica se o script do Elfsight já foi adicionado
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;

      // Define um callback para quando o script for carregado
      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    } else {
      // Se o script já estava presente, marca como carregado
      setScriptLoaded(true);
    }

    // Função de limpeza (opcional)
    return () => {
      // Não remove o script para evitar problemas com múltiplas renderizações
    };
  }, []);

  return (
    <div className='google-reviews'>
      <h2>O que nossos clientes estão dizendo:</h2>
      {scriptLoaded && (
        <div 
          className="elfsight-app-029f3f3a-b557-4c0a-a083-544509d16622" 
          data-elfsight-app-lazy
        >
        </div>
      )}
    </div>
  );
};

export default GoogleReviews;
