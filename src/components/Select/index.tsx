import { FC } from 'react';

import { TemplateInput } from '~/components';

import { CustomSelect, SelectOption } from './styles';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = (props) => {
  const { options, value, onChange, name } = props;

  const elementId = `select-${name}`;

  // TODO: make multiple works on send categories

  return (
    <TemplateInput {...props} elementId={elementId}>
      <CustomSelect data-testid={`select-${name}`} onChange={onChange} value={value}>
        <SelectOption>Selecione</SelectOption>
        {options.map((option) => (
          <SelectOption key={option.value} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </CustomSelect>
    </TemplateInput>
  );
};
