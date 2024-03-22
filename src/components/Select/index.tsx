import { FC } from 'react';

import { TemplateInput } from '~/components';

import { CustomSelect, Option } from './styles';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = (props) => {
  const { options, value, onChange, name } = props;

  const elementId = `select-${name}`;

  return (
    <TemplateInput {...props} elementId={elementId}>
      <CustomSelect data-testid={`select-${name}`} onChange={onChange} value={value}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </CustomSelect>
    </TemplateInput>
  );
};
