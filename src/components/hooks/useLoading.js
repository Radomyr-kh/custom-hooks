import {useState, useEffect} from 'react';

export const useLoading = (fetchMethod, params) => {
  const [entities, setEntities] = useState(null);

  useEffect(() => {
    setEntities(null);
    fetchMethod(params).then((res) => {
      setEntities(res);
      console.log('Users: ', res);
    });
  }, [fetchMethod, params]);

  return entities;
};
