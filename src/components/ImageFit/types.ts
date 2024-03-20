export type PropsObjectFit = 'cover' | 'contain';

export type PropsImageFit = {
  fit?: PropsObjectFit;
};

export interface Props extends PropsImageFit {
  className?: string;
  description: string;
  fill?: boolean;
  height?: number;
  src: string;
  width?: number;
}
