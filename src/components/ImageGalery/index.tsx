import { FC } from 'react';
import { AiFillDelete, AiFillStar } from 'react-icons/ai';

import {
  ButtonIconDelete,
  ButtonIconStart,
  ContentScroll,
  ContentThumbnail,
  ImageContent,
  ImageFitRoot,
  ImageThumbnail,
  Root,
} from './styles';
import { Props } from './types';

export const ImageGalery: FC<Props> = ({ className, description, images, thumbnail, onDelete, onPromoteThumbnail }) => (
  <Root className={className}>
    <ContentThumbnail>
      <ContentScroll>
        {thumbnail && (
          <ImageThumbnail>
            <ImageFitRoot description={description} fill fit="cover" src={thumbnail} />
          </ImageThumbnail>
        )}
        {images?.map((imageSrc, index) =>
          typeof imageSrc === 'string' && /\.(jpg|jpeg|png|gif)$/i.test(imageSrc) ? (
            <ImageContent key={index}>
              <ButtonIconStart
                color="secondary"
                icon={AiFillStar}
                onClick={() => onPromoteThumbnail && onPromoteThumbnail(index)}
                title="Promover a Thumbnail"
              />
              <ButtonIconDelete
                color="error"
                icon={AiFillDelete}
                onClick={() => onDelete && onDelete(index)}
                title="Apagar Imagem"
              />
              <ImageFitRoot description={description} fill fit="cover" src={imageSrc} />
            </ImageContent>
          ) : null,
        )}
      </ContentScroll>
    </ContentThumbnail>
  </Root>
);
