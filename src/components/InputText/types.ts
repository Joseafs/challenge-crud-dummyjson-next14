import { ChangeEvent, InputHTMLAttributes } from 'react';

import { Props as TemplateInputProps } from '~/components/TemplateInput/types';

export interface Props extends TemplateInputProps {
  max?: string | number;
  min?: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputHTMLAttributes<unknown>['type'];
  value?: string | number;
}
