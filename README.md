# Preditor de Evasão Escolar no Ensino Médio

## Descrição

Este projeto consiste em uma aplicação web que utiliza técnicas de Machine Learning com PySpark para prever a evasão escolar em escolas do ensino médio. O frontend é composto por uma tela de login com autenticação JWT e um dashboard que exibirá, futuramente, visualizações interativas sobre o risco de evasão escolar baseado em dados do MEC, IBGE e outros.

O backend implementa autenticação segura e proteção das rotas, possibilitando que apenas usuários autenticados acessem o dashboard.

---

## Funcionalidades

- Tela de login com autenticação via JWT.
- Armazenamento do token no frontend para acesso seguro ao dashboard.
- Dashboard inicial com informações sobre o projeto e espaço para futuras visualizações.
- Backend com rotas protegidas e geração de token JWT.
- Estrutura organizada para facilitar expansões futuras.

---

## Tecnologias utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js, JSON Web Tokens (JWT), bcrypt (para hash de senha)
- **Machine Learning:** PySpark (em desenvolvimento / integração futura)
- **Cloud:** Implantação planejada em plataforma cloud (AWS, Azure, Google Cloud, Oracle)
- **Outros:** APIs do MEC e IBGE para dados socioeconômicos e educacionais.

---

## Estrutura do projeto
```
frontend/
├── css/
│ ├── login.css
│ └── dashboard.css
├── js/
│ ├── login.js
│ └── dashboard.js
├── login.html
└── dashboard.html
backend/
└── server.js
└── .env
```

---

## Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado (versão 14+)
- npm (gerenciador de pacotes do Node.js)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/Gabipsn11/evasao-escolar-apl.git
```

2. Entre na pasta do backend e instale as dependências:
```bash
cd backend
npm install
```
3. Inicie o servidor backend:
```bash
node server.js
```
4. Abra a pasta frontend e abra o arquivo login.html no navegador (ou use um servidor estático).
5. Utilize um usuário cadastrado para fazer login (ou configure o backend para criar usuários).

## Autenticação
- A aplicação utiliza JWT para autenticar usuários.
- Após o login, o token é salvo no localStorage.
- As rotas protegidas verificam o token para garantir acesso autorizado.
