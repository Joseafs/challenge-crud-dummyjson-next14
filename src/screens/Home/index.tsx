'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { Button } from '~/components/Button';
import { fetchExamples } from '~/services/examples';

export const HomeScreen: FC = () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState<unknown[]>([]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await fetchExamples()) as any;
        setData(response.products);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('🚀 ~ fetchData ~ error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>This is just a start page </h1>
      <h6>ignore the count button, its just a example...</h6>
      <br />
      <span> returned itens: {data?.length}</span>
      <br />
      <br />
      <Button onClick={handleClick}>{count}</Button>
    </main>
  );
};
