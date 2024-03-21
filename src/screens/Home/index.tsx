'use client';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

export const Home: FC = () => {
  const router = useRouter();

  useDidMount(() => {
    router.replace('/products/');
  });

  return <></>;
};
