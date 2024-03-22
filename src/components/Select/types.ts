import { ChangeEvent } from 'react';

import { Props as TemplateInputProps } from '~/components/TemplateInput/types';

export interface SelectOptions<Value = string> {
  label: string;
  value: Value;
}

export interface SelectProps extends TemplateInputProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  value?: string;
}
