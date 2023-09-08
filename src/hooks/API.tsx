import { useEffect, useState } from 'react';

export const useApiRequest = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function checkLocation() {
      var requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow" as RequestRedirect, // Explicitly specify the correct type
      };

      fetch(url, requestOptions)
        .then(response => response.json())
        .then((result) => {
         
          setData(result);
          setLoading(false);
        })
        .catch((error) => {
          setError("An error occurred while fetching the data.");
          setLoading(false);
        });
    }

    checkLocation();
  }, [url]);

  return { data, loading, error };
};
