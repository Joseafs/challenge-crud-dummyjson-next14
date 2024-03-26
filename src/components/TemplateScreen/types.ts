import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  buttonBackRoute?: string;
  hasBackButton?: boolean;
  hasFooter?: boolean;
  hasHeader?: boolean;
  loading?: boolean;
}
