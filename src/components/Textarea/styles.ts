import styled from 'styled-components';

import { Input as InputStyled } from '~/components/InputText/styles';
export { Label, Span } from '~/components/InputText/styles';

import { PropsStyleRoot } from './types';

export const Root = styled.div<PropsStyleRoot>`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  ${({ width }) => (width === 'flex' ? 'flex: 1' : width ? `width: ${width}` : null)};
`;

export const Input = styled(InputStyled).attrs({ as: 'textarea' })`
  ${InputStyled};

  display: unset;
  flex: unset;

  resize: vertical;
  min-height: 60px;
`;
