import styled, { css } from 'styled-components';

export const InputTextarea = styled.textarea`
  width: 100%;
  outline: unset;
  border: none;

  resize: vertical;
  min-height: 60px;

  ${({ theme }) => css`
    padding: ${theme.space}px;
  `}
`;
