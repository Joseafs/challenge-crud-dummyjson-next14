import { Metadata } from 'next';

import { Home } from '~/screens/Home';

export const metadata: Metadata = {
  title: 'Redirecting',
};

export default function HomePage() {
  return <Home />;
}
