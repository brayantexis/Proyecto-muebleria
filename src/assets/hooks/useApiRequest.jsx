import { useState, useEffect } from 'react';

export const useApiRequest = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        setError(null);

          const options = {
          method,
          headers:  {
            'Content-Type': 'application/json',
          },
          body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, options);
        const responseData = await response.json();

          if (!response.ok) {
          throw new Error(responseData.message || 'Ocurrio un error');
          }
          
          setData(responseData);
          
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchData(url);
  }, [body, method, url]);

  return { data, error };
};
