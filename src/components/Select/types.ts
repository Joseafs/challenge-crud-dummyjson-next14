import { ChangeEvent } from 'react';

export interface SelectOptions<Value = string> {
  label: string;
  value: Value;
}

export interface SelectProps {
  className?: string;
  label?: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  value?: string;
}
