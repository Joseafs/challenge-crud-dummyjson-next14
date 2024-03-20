import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { Input, Label, Root } from './styled';

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

const OgInputText = ({ name, type, label, value, min, max, required, placeholder, onChange }: Props) => {
  return (
    <Root>
      {label && <Label htmlFor={name}>{label}</Label>}
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

export const InputText = memo(OgInputText);
