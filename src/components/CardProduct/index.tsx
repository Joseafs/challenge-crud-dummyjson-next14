import { FC } from 'react';

import { Button, ImageFit } from '~/components';

import { Body, Header, ImageContent, Root, Title } from './styles';
import { Props } from './types';

export const CardProduct: FC<Props> = ({ product, className, onDelete, onEdit }) => {
  const { title, thumbnail, description, discountPercentage, price, stock, brand } = product;

  return (
    <Root className={className}>
      <Header>
        <Title>{title}</Title>
        <div>
          <Button onClick={onEdit}>edit</Button>
          <Button onClick={onDelete}>delete</Button>
        </div>
      </Header>
      <ImageContent>
        <ImageFit description={description} fill fit="cover" src={thumbnail} />
      </ImageContent>
      <Body>
        {/* Marca: {brand}
        <br />
        Categoria: {category} */}
        Marca: {brand}
        <br />
        Desconto: {discountPercentage}%
        <br />
        preço: {price}
        <br />
        {/* avaliação: {rating} */}
        Estoque: {stock}
      </Body>
    </Root>
  );
};
