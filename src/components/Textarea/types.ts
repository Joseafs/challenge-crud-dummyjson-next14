import { ChangeEvent } from 'react';

import { Props as TemplateInputProps } from '~/components/TemplateInput/types';

export interface Props extends TemplateInputProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string;
}
