import { fireEvent, render, screen } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';

import { ImageGallery } from '.';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('ImageGalery', () => {
  const onDeleteMock = jest.fn();
  const onPromoteThumbnailMock = jest.fn();

  const images = ['image1.jpg', 'image2.png', 'image3.gif'];
  const thumbnail = 'thumbnail.jpg';
  const selectedImageIndex = 0;

  test('calls onClick onPromoteThumbnailMock correctly', () => {
    render(
      withThemeProvider(
        <ImageGallery
          className="test-class"
          images={images}
          onDelete={onDeleteMock}
          onPromoteThumbnail={onPromoteThumbnailMock}
          thumbnail={thumbnail}
        />,
      ),
    );

    const promoteButton = screen.getByTestId('gallery-promote-0');
    fireEvent.click(promoteButton);

    expect(onPromoteThumbnailMock).toHaveBeenCalledWith(selectedImageIndex);
  });
  test('calls onClick handlers correctly', () => {
    render(
      withThemeProvider(
        <ImageGallery
          className="test-class"
          images={images}
          onDelete={onDeleteMock}
          onPromoteThumbnail={onPromoteThumbnailMock}
          thumbnail={thumbnail}
        />,
      ),
    );

    const deleteButton = screen.getByTestId('gallery-delete-0');

    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledWith(selectedImageIndex);
  });
  test('renders correctly without thumbnail', () => {
    render(
      withThemeProvider(
        <ImageGallery images={images} onDelete={onDeleteMock} onPromoteThumbnail={onPromoteThumbnailMock} />,
      ),
    );

    const thumbnailImage = screen.queryByTestId('gallery-thumbnail');
    expect(thumbnailImage).not.toBeInTheDocument();
  });
});
