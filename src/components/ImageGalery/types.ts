type onClick = (e: number) => void;

export interface Props {
  className?: string;
  description?: string;
  images?: string[];
  onDelete?: onClick;
  onPromoteThumbnail?: onClick;
  thumbnail?: string;
}
