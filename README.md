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
