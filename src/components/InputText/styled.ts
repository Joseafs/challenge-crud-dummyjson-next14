import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const Label = styled.label``;

export const Input = styled.input`
  display: flex;
  flex: 1;
  outline: unset;

  ${({ theme }) => css`
    padding: ${theme.space * 1}px;
    border-radius: ${theme.shape.radius}px;
    border: solid 1px ${theme.palette.primary.main};
  `}
`;
