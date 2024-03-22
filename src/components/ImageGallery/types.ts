type onClick = (e: number) => void;

export interface Props {
  className?: string;
  images?: string[];
  onDelete?: onClick;
  onPromoteThumbnail?: onClick;
  thumbnail?: string;
}
