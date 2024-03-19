import { render } from '@testing-library/react';

import { snapshotYamamotoDescription } from '~/utils/mocks/snapshotMockValues';

import { ImageFit } from '.';

const imagePublicPath = '/images/favicon.png';

describe('ImageFit', () => {
  test('Should match snapshot', () => {
    const { container } = render(
      <ImageFit src={imagePublicPath} description={snapshotYamamotoDescription} width={500} height={500} />,
    );
    expect(container).toMatchSnapshot();
  });
});
