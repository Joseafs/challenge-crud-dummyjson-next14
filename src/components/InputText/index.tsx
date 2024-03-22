import { FC } from 'react';

import { TemplateInput } from '~/components';

import { Input } from './styles';
import { Props } from './types';

export const InputText: FC<Props> = (props) => {
  const { name, type, value, min, max, required, placeholder, onChange } = props;
  const elementId = `input-${name}`;

  return (
    <TemplateInput {...props} elementId={elementId}>
      <Input
        data-testid={elementId}
        id={elementId}
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </TemplateInput>
  );
};
