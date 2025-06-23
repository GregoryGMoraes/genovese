##### Discente : Grégory Gonçalves Moraes
##### Orientador : Wagner Loch

# 📱 Genovese

Este repositório contém o desenvolvimento de um sistema composto por um aplicativo mobile (React Native), criado como Trabalho da cadeira de Frameworks para o curso de Análise e desenvolvimento de sistemas na Faculdade de Tecnologia Senac Pelotas-RS.

## Motivação
O trabalho tem como objetivo desenvolver um cardápio de produtos para um comércio de alimentos com foco em vinhos, para atender uma demanda existente
do cliente.

## 🧰 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Node JS](https://nodejs.org/pt)

## Funcionalidades

- Listagem de produtos por categoria (vinhos, espumantes, etc)
- Detalhes do produto com bandeira do país de origem
- Carrinho de compras
- Autenticação de usuário
- Busca por produtos
- Interface moderna e responsiva

## Tecnologias

- React Native + Expo
- TypeScript
- Context API para gerenciamento de estado (carrinho, autenticação)
- Supabase (backend)
- REST Countries API (bandeiras)
- FontAwesome5 (ícones)

## Estrutura de Pastas

```
src/
  app/
    (vinhos)/
    (espumantes)/
    (pescados)/
    (chocolates)/
    (frios)/
    (destilados)/
    components/
      flagCountry/
      productDetails/
      productFlatItems/
      ...
    context/
    constants/
      colors.ts
      fontSize.ts
```

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos

- Node.js instalado
- Expo CLI (para o app genoveseApp)
- Navegador moderno (para a versão web)

1. **Clone o repositório**
   ```sh
   git clone https://github.com/GregoryGMoraes/genovese
   cd genoveseApp
   ```

2. **Instale as dependências**
   ```sh
   npm install
   # ou
   yarn
   ```

3. **Configure as variáveis de ambiente**
   - Crie um arquivo `.env` com as chaves do Supabase e outras APIs, se necessário.

4. **Rode o projeto**
   ```sh
   npx expo start
   ```

5. **Acesse no seu dispositivo**
   - Use o app Expo Go no seu celular para escanear o QR code, ou rode em um emulador.
   
## Observações

- Para as bandeiras dos países, é utilizada a [REST Countries API](https://restcountries.com/).
- Para ícones, utilize a biblioteca [@expo/vector-icons](https://docs.expo.dev/guides/icons/).
- As fontes e cores estão centralizadas em `src/constants`.

## Personalização

- Para adicionar novas categorias, basta criar uma nova pasta em `src/app` e usar o componente genérico de listagem.

**Desenvolvido por Grégory Moraes**