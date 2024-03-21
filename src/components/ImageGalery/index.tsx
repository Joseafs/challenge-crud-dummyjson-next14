import { FC } from 'react';

import { ImageFit } from '~/components';

import { ContentScroll, ContentThumbnail, ImageContent, ImageThumbnail, Root } from './styles';
import { Props } from './types';

export const ImageGalery: FC<Props> = ({ className, description, images, thumbnail }) => {
  return (
    <Root className={className}>
      <ContentThumbnail>
        <ContentScroll>
          {thumbnail && (
            <ImageThumbnail>
              <ImageFit description={description} fill fit="contain" src={thumbnail} />
            </ImageThumbnail>
          )}
          {images?.map((imageSrc, index) => (
            <ImageContent key={index}>
              <ImageFit description={description} fill fit="contain" src={imageSrc} />
            </ImageContent>
          ))}
        </ContentScroll>
      </ContentThumbnail>
    </Root>
  );
};
