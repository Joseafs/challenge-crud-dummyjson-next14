import { FC } from 'react';

import { CustomSelect, Label, Option, Root, Span } from './styles';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({ label, options, value, onChange, className, name }) => {
  return (
    <Root className={className}>
      {label && (
        <Label>
          <Span>{label}</Span>
        </Label>
      )}
      <CustomSelect data-testid={`select-${name}`} onChange={onChange} value={value}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </CustomSelect>
    </Root>
  );
};
