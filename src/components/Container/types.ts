import { PropsWithChildren } from 'react';

export type StyleRootProps = {
  className?: string;
  fixed?: boolean;
};

export interface Props extends PropsWithChildren<StyleRootProps> {}
