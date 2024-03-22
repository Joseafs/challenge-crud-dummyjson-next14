import { FC } from 'react';

import { Content, Error, InputContent, Label, Root, Span } from './styles';
import { Props } from './types';

export const TemplateInput: FC<Props> = ({
  children,
  className,
  disabled,
  name = 'template-input',
  errorDescription,
  hasError = false,
  elementId,
  label,
  width,
}) => (
  <Root className={className} width={width}>
    {label && (
      <Label htmlFor={elementId}>
        <Span>{label}</Span>
      </Label>
    )}
    <Content>
      <InputContent disabled={disabled} hasError={hasError}>
        {children}
      </InputContent>

      {hasError && !!errorDescription?.length && (
        <Error htmlFor={elementId} id={`${elementId}-error`}>
          {errorDescription}
        </Error>
      )}
    </Content>
  </Root>
);
