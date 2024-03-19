'use client';

import { FC, useCallback, useState } from 'react';

import { Button, Grid } from '~/components';

import { ProductsTableData } from './components/ProductsTableData';

export const HomeScreen: FC = () => {
  const [count, setCount] = useState(10);

  const handleClick = useCallback(() => {
    setCount(count + 5);
  }, [count]);

  return (
    <main>
      <h1>Need Header </h1>
      <br />
      <Grid backgroundColor="primary" margin={[1]} padding={[1]}>
        Lorem ipsum
      </Grid>
      <br />
      <Button color="primary" onClick={handleClick}>
        {count}
      </Button>
      <br />
      <ProductsTableData count={count} />
      <br />
      <h2>Need Footer </h2>
    </main>
  );
};
