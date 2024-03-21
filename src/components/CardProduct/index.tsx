import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { ButtonIcon, ImageFit } from '~/components';

import { ActionsContent, Body, Header, ImageContent, Root, Title } from './styles';
import { Props } from './types';

export const CardProduct: FC<Props> = ({ product, className, onDelete, onEdit }) => {
  const { title, thumbnail, description, discountPercentage, price, stock, brand } = product;

  return (
    <Root className={className}>
      <Header>
        <Title>{title}</Title>
        <ActionsContent>
          <ButtonIcon color="secondary" icon={AiFillEdit} onClick={onEdit} />

          <ButtonIcon color="secondary" icon={AiFillDelete} onClick={onDelete} />
        </ActionsContent>
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
