import { FC } from 'react';

import { Input, Label, Root, Span } from './styles';
import { Props } from './types';

export const InputText: FC<Props> = ({
  name,
  type,
  label,
  value,
  min,
  max,
  required,
  placeholder,
  onChange,
  width,
  className,
}) => (
  <Root className={className} width={width}>
    {label && (
      <Label htmlFor={name}>
        <Span>{label}</Span>
      </Label>
    )}
    <Input
      data-testid={`input-${name}`}
      id={name}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  </Root>
);
