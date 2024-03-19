import { Metadata } from 'next';

import { HomeScreen } from '~/screens/Home';

export const metadata: Metadata = {
  title: 'Home page',
};

export default function HomePage() {
  return <HomeScreen />;
}
