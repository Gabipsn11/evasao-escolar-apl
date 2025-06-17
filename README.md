# Projeto Preditor de Evasão Escolar

## Descrição

Projeto que prevê evasão escolar utilizando dados do MEC/INEP e IBGE,
com análise feita em PySpark e Machine Learning, e dashboard interativo em Dash.

## Estrutura do projeto

- backend/: API FastAPI com autenticação MFA, processamento de dados e modelo ML
- frontend/: Dashboard interativo com login e visualização dos resultados

## Como rodar

### Backend

```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

# Backend - Evasão Escolar

## Estrutura de dados

- Coloque os arquivos CSV dentro da pasta `data/`
- Exemplos:
  - `censo_escolar.csv` — dados do MEC/INEP
  - `dados_ibge.csv` — dados socioeconômicos do IBGE
  - `dataset_evasao_escolar.csv` - dados de evasão escolar do MEC/INEP

## Próximos passos

- Criar funções para carregar e tratar os CSVs com PySpark
- Implementar modelo Gradient Boosting para predição da evasão
- Criar rotas para expor os dados e resultados ao frontend
- Implementar autenticação MFA para segurança

# Frontend - Dashboard Evasão Escolar

## Funcionalidades a implementar

- Tela de login com autenticação multifatorial (MFA)
- Dashboard interativo:
  - Mapa de risco de evasão por escola
  - Ranking de fatores que influenciam a evasão
  - Simulador de cenários para predição

## Dicas

- Use a API do backend para buscar dados
- Atualize a variável BACKEND_URL para o endereço correto da API
- Utilize bibliotecas Dash, Plotly e Pandas para visualizações