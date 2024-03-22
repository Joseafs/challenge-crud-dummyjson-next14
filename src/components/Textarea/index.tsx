import { FC } from 'react';

import { TemplateInput } from '~/components';

import { InputTextarea } from './styles';
import { Props } from './types';

export const Textarea: FC<Props> = (props) => {
  const { name, value, required, placeholder, onChange } = props;

  const id = `textarea-${name}`;

  return (
    <TemplateInput {...props} name={id}>
      <InputTextarea
        data-testid={`textarea-${name}`}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </TemplateInput>
  );
};
