import * as Yup from 'yup';

const wordTooShort = 'Muito curto !';
const wordTooLong = 'Muito longo !';
const wordPriceCantBeZero = (value: string) => `O "${value}" não pode ser zero`;
const wordRequiredByValue = (value: string) => `Campo "${value}" é obrigatório.`;

export const productValidationShema = Yup.object().shape({
  brand: Yup.string().min(3, wordTooShort).max(30, wordTooLong).required(wordRequiredByValue('Marca')),
  description: Yup.string().min(3, wordTooShort).max(200, wordTooLong).required(wordRequiredByValue('Descrição')),
  title: Yup.string().min(3, wordTooShort).max(50, wordTooLong).required(wordRequiredByValue('Título')),

  category: Yup.string().required('Por favor, selecione uma categoria.'),
  thumbnail: Yup.string().url().required('Insira uma imagem e a promova a Capa'),

  discountPercentage: Yup.number().min(0).required(wordPriceCantBeZero('Porcentagem de Desconto')),
  price: Yup.number().min(0).required(wordPriceCantBeZero('Preço')),
  rating: Yup.number().min(0).required(wordRequiredByValue('Avaliação')),
  stock: Yup.number().min(0).required(wordRequiredByValue('Estoque')),

  urlImage: Yup.string().when('images', {
    is: (value: []) => value && value.length > 0,
    then: (schema) => schema.required('Por gentileza, insira uma URL de imagem válida.'),
  }),
});
