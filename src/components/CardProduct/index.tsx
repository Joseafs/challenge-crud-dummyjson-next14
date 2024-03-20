import { FC } from 'react';

import { ImageFit } from '~/components';

import { Body, Header, ImageContent, Root, Title } from './styles';
import { Props } from './types';

export const CardProduct: FC<Props> = ({ product, className }) => {
  const { title, thumbnail, description, discountPercentage, price, stock } = product;

  return (
    <Root className={className}>
      <Header>
        <Title>{title}</Title>
        <div>
          <div>edit</div>
          <div>delete</div>
        </div>
      </Header>
      <ImageContent>
        <ImageFit description={description} fill fit="cover" src={thumbnail} />
      </ImageContent>
      <Body>
        {/* Marca: {brand}
        <br />
        Categoria: {category} */}
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
