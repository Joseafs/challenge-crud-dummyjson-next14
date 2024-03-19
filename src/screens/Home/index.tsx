'use client';

import { FC, useCallback, useState } from 'react';

import { Button, Grid } from '~/components';

export const HomeScreen: FC = () => {
  const [count, setCount] = useState(10);

  const handleClick = useCallback(() => {
    setCount(count + 5);
  }, [count]);

  return (
    <main>
      <h1>Need Header </h1>
      <br />
      <Grid mgn={[2, 9]}>DASDSADASD</Grid>
      <br />
      <Button color="primary" onClick={handleClick}>
        {count}
      </Button>
      <br />
      <br />
      <h2>Need Footer </h2>
    </main>
  );
};
