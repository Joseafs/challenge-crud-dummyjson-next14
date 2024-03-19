import Image from 'next/image';
import styled, { css } from 'styled-components';

import { PropsImageFit } from './types';

export const Root = styled(Image)<PropsImageFit>`
  ${({ fit }) =>
    fit &&
    css`
      object-fit: ${fit};
      width: 100%;
      height: 100%;
    `}
  max-width: 100%;
  max-height: 100%;
`;
