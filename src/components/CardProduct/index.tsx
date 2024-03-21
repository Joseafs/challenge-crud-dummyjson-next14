import { FC, useMemo } from 'react';
import { AiFillDelete, AiFillEdit, AiFillStar } from 'react-icons/ai';
import { BiSolidDiscount } from 'react-icons/bi';
import { BsBoxFill } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';

import { ButtonIcon, ImageFit } from '~/components';
import { calculateDiscountValue } from '~/utils/calculateDiscountValue';
import { formatCurrencyWithSymbol } from '~/utils/formatCurrencyWithSymbol';

import {
  ActionsContent,
  Body,
  Column,
  DiscountPrice,
  Footer,
  FooterPrice,
  Header,
  ImageContent,
  Root,
  Row,
  Small,
  Strong,
  Tag,
  Title,
} from './styles';
import { Props } from './types';

export const CardProduct: FC<Props> = ({ product, className, onDelete, onEdit }) => {
  const { title, thumbnail, description, discountPercentage, price, stock, brand, rating, category } = product;

  const originalPriceCurrency = useMemo(() => formatCurrencyWithSymbol(price), [price]);
  const discountPriceCurrency = useMemo(
    () => formatCurrencyWithSymbol(calculateDiscountValue(price, discountPercentage)),
    [discountPercentage, price],
  );

  return (
    <Root className={className}>
      <ImageContent>
        <ImageFit description={description} fill fit="cover" src={thumbnail} />
        <DiscountPrice>
          <BiSolidDiscount /> <Strong>{discountPercentage}%</Strong>
        </DiscountPrice>
      </ImageContent>
      <Header>
        <Title title={title}>{title}</Title>
        <ActionsContent>
          <ButtonIcon color="secondary" icon={AiFillEdit} onClick={onEdit} title="Editar produto" />
          <ButtonIcon color="secondary" icon={AiFillDelete} onClick={onDelete} title="Apagar produto" />
        </ActionsContent>
      </Header>

      <Body>
        <Column title="Tags">
          <HiOutlineHashtag /> <Tag title={`Marca ${brand}`}>{brand}</Tag>
          <Tag title={`Categoria ${category}`}>{category}</Tag>
        </Column>
        <Row>
          <Column title="Pontos de Avaliação">
            <BsBoxFill /> {stock}
          </Column>
          <Column title="Pontos de Avaliação">
            <AiFillStar /> {rating}
          </Column>
        </Row>
      </Body>

      <Footer>
        <FooterPrice>
          <Small>{originalPriceCurrency}</Small>
          <Strong>{discountPriceCurrency}</Strong>
        </FooterPrice>
      </Footer>
    </Root>
  );
};
