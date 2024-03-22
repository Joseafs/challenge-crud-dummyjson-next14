import Image from 'next/image';

export type PropsObjectFit = 'cover' | 'contain';

export type PropsImageFit = {
  fit?: PropsObjectFit;
};

type ImageNext = typeof Image;

export interface Props extends PropsImageFit, Partial<ImageNext> {
  className?: string;
  description?: string;
  fill?: boolean;
  height?: number;
  src: string;
  width?: number;
}
