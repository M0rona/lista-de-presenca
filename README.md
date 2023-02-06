# 🚀 Lista de Presença em React (Vite)

[VideoListaDePresenca.webm](https://user-images.githubusercontent.com/91230559/216876770-8258b251-4b6c-4be2-9756-25e1fa2338d1.webm)

## 📝 Descrição
Este é meu primeiro projeto em React (Vite), construído com base na Trilha "Discover" da plataforma de cursos RocketSeat.

## 🔗 Acesse o Projeto
Clique [aqui](https://lista-de-presenca-steel.vercel.app/) para acessar o projeto.

## 💻 Uso
A aplicação permite que você adicione o nome de uma pessoa à lista de presença, armazenando seu nome e horário. Além disso, você pode ver as informações do meu usuário no Github, consumindo dados da API da plataforma.

## 📋 Índice
- [Instalação](#-instalação)
- [Execução](#-execução)
- [Ferramentas](#-ferramentas)
- [Conceitos Aplicados](#-conceitos-aplicados)
- [Explicação Detalhada do Código](#-explicação-detalhada-do-código)

## 🔧 Instalação
1. Clone este repositório com `git clone` ou baixe o código-fonte.
2. Entre na pasta do projeto com `cd lista-de-presenca`.
3. Instale as dependências com `npm install` ou `yarn`.

## 🚀 Execução
1. Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`.
2. Abra seu navegador e acesse `http://localhost:5173`.

## 🛠️ Ferramentas
- React (Vite)
- CSS
- JavaScript
- API do Github

## 🧩 Conceitos Aplicados
- Crianção de Projeto
- Execução de Projeto
- Estrutura React
- JSX
- Estrutura Pastas e Arquivos
- Fragment
- Importação de arquivos CSS
- Separando CSS
- Estilização Página CSS
- Componentes
- Propriedades
- Estados
- Imutabilidade
- Key Prop
- Hooks
- useEffect
- Consumo de API
- useEffect Async


## 🔎 Explicação Detalhada do Código
1. Importações: O código importa o React e as funções de hook "useState" e "useEffect" da biblioteca React. Também importa o arquivo CSS e um componente "Card".

2. useState: O hook "useState" é usado para criar o estado da aplicação. Há três estados criados nesse código: clientName, clients e user. O estado "clientName" é usado para armazenar o nome do cliente digitado pelo usuário. O estado "clients" é usado para armazenar todos os clientes adicionados. O estado "user" é usado para armazenar informações sobre um usuário do Github.

3. handleAddClient: Esta é uma função que é executada quando o botão "Adicionar" é clicado. Ela cria um novo objeto de cliente com o nome e horário atual e adiciona esse objeto à lista de clientes usando o hook "setClients".

4. useEffect: O hook "useEffect" é usado para realizar uma requisição HTTP para obter informações sobre um usuário do Github. O useEffect é executado somente uma vez (quando o componente é montado) porque o array vazio é passado como segundo argumento.

5. Renderização: Finalmente, o código renderiza a interface do usuário. Há um cabeçalho que exibe o nome e o avatar do usuário do Github obtido através da requisição HTTP. Também há um input para digitar o nome do cliente e um botão para adicioná-lo à lista. Por fim, todos os clientes adicionados são renderizados como componentes "Card".
