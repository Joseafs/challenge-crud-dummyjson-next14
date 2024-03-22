import styled, { css } from 'styled-components';

export const Input = styled.input`
  display: flex;
  flex: 1;
  outline: unset;
  border: none;

  ${({ theme }) => css`
    padding: ${theme.space}px;
  `}
`;
