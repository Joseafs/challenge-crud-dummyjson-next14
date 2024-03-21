import { ChangeEvent, InputHTMLAttributes } from 'react';

import { Input, Label, Root, Span } from './styles';

interface Props {
  label?: string;
  max?: string | number;
  min?: string | number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: InputHTMLAttributes<unknown>['type'];
  value?: string | number;
}

export const InputText = ({ name, type, label, value, min, max, required, placeholder, onChange }: Props) => {
  return (
    <Root>
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
};
