import { FC } from 'react';

import { ImageFit } from '~/components/ImageFit';

import { ScreenCentralized } from './styles';

const imageName = 'landscape-with-clouds-mountains-trees-with-not-found-background.svg';
const imageDescription = 'Paisagem com nuvens montanhas e arvores com not found ao fundo';

export const NotFoundScreen: FC = () => (
  <main>
    <ScreenCentralized>
      <ImageFit src={`images/${imageName}`} description={imageDescription} width={900} height={900} objectFit="cover" />
    </ScreenCentralized>
  </main>
);
