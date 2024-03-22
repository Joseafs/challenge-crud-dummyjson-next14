## Esse é um projeto de desafio:

### Instruções:

- O desafio consiste em desenvolver uma simples aplicação WEB para um curso on-line, com as seguintes funcionalidades:

- C.R.U.D de Produtos:

  - Listagem (Com paginação);
  - Criação;
  - Alteração;
  - Deletar;

- Cada produto pode ter uma ou mais categorias vinculadas ao produto.
- Busca de Produtos(No Front)
- Buscar produtos por Title ou Brand Ordenacao de produtos por Title ou Brand
- Deve se mostrar todos os atributos que tiverem na API

### API de Referência:

- https://dummyjson.com/docs/

### Pontos IMPORTANTES:

- Será avaliado o Layout;
- Será avaliada a qualidade e organização do código;
- É necessário fazer testes;

### Requisitos Bônus:

- Deploy da aplicação em alguma cloud (aws, heroku, Github Pages etc);
- Utilizar de typescript;
- Utilizar de Next.js
- Autenticação de usuários

---

## Boilerplate base:

Nesse projeto utilizei o meu [boilerplate](https://github.com/Joseafs/boilerplate-next-styled-2024) como base para dar continuídade

### O que há no projeto

- [Next.js (14.1.3)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Testing Library](https://testing-library.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://axios-http.com/)
- [Axios Mock Adapter](https://www.npmjs.com/package/axios-mock-adapter)
- [Faker](https://fakerjs.dev/)
- [Storybook](https://storybook.js.org/)
- [Formik](https://formik.org/)

---

## Requerimentos para rodar o projeto

```bash
"yarn": ">=1.22.17 <=1.22.22",
"node": ">=18 <=20.11.1"
```

---

## Comandos existentes

```bash
"start:dev": Inicia a versão de desenvolvimento em "localhost:3000";
"start:build": Cria versão de produção;
"start:prod": Inicializa em "localhost:3000" com base na versão de build existente;
"test": Executa o Jest para cobertura de testes unitários;
"test:coverage": Executa os testes unitários e expoe um relátorio da cobertura;
"type:check": Busca por conflitos de tipagem;
"lint": Verifica no projeto todo por conflitos eslint;
"lint:format": Formata todos arquivos ao padrão eslint;
"storybook": Inicia storybook em "localhost:6006";
"storybook build": Compila e inicia a versão storybook estática;
```

---

## Pronto para Vercel

- [Master](https://challenge-crud-dummyjson-next14.vercel.app/)

## Desenvolvedor

- [Linkedin Joseafs](https://www.linkedin.com/in/i-joseafs/)
