export type PropsFit = 'cover' | 'contain';

export type Props = {
  src: string;
  description: string;
  width: number;
  height: number;
  className?: string;
  objectFit?: PropsFit;
};

export type PropsImageFit = {
  fit?: PropsFit;
};
