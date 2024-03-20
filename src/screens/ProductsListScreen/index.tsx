'use client';

import { FC, useCallback, useState } from 'react';

import { Button, Grid } from '~/components';

import { ProductsCards } from './components/ProductsTableData';

export const ProductsListScreen: FC = () => {
  const [count, setCount] = useState(2);

  const handleClick = useCallback(() => {
    setCount(count + 5);
  }, [count]);

  return (
    <main>
      <h1>Header Lorem Ipsum </h1>
      <br />
      <Grid backgroundColor="primary" margin={[1]} padding={[1]}>
        Search(title, brand) --- Select category
      </Grid>
      <br />
      <Button color="primary" onClick={handleClick}>
        {count}
      </Button>
      <br />
      <ProductsCards count={count} />
      <br />
      <h2>Footer Lorem Ipsum </h2>
    </main>
  );
};
