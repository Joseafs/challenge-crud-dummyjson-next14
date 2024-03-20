import { render } from '@testing-library/react';

import { snapshotYamamotoDescription } from '~/utils/mocks/snapshotMockValues';

import { ImageFit } from '.';

const imagePublicPath = '/images/favicon.png';

describe('ImageFit', () => {
  test('Should match snapshot', () => {
    const { container } = render(
      <ImageFit description={snapshotYamamotoDescription} height={500} src={imagePublicPath} width={500} />,
    );
    expect(container).toMatchSnapshot();
  });
});
