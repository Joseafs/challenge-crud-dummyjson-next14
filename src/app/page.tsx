import { Metadata } from 'next';

import { Home } from '~/screens/Home';

export const metadata: Metadata = {
  title: 'Home page',
};

export default function HomePage() {
  return <Home />;
}
