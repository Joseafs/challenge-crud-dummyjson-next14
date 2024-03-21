import { FC } from 'react';

import { Input, Label, Root, Span } from './styles';
import { Props } from './types';

export const Textarea: FC<Props> = ({ name, label, value, required, placeholder, onChange, width, className }) => (
  <Root className={className} width={width}>
    {label && (
      <Label htmlFor={name}>
        <Span>{label}</Span>
      </Label>
    )}
    <Input
      data-testid={`textarea-${name}`}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      value={value}
    />
  </Root>
);
