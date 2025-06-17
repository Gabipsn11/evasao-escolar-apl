import dash
from dash import dcc, html
import pandas as pd
import plotly.express as px

# Dados (ajuste os nomes dos arquivos conforme necessário)
df_predicoes = pd.read_csv('./data/processed/censo_escolar_2021-2024.csv')
df_fatores = pd.read_csv('./data/processed/dataset_evasao_escolar.csv')

app = dash.Dash(__name__)
app.title = "Preditor de Evasão Escolar"

app.layout = html.Div([
    html.H1("Dashboard: Risco de Evasão Escolar"),

    html.H2("Mapa de Risco"),
    dcc.Graph(figure=px.scatter_mapbox(
        df_predicoes, lat="lat", lon="lon", color="risco",
        hover_name="escola", zoom=4, height=500,
        mapbox_style="open-street-map"
    )),

    html.H2("Fatores Mais Influentes"),
    dcc.Graph(figure=px.bar(
        df_fatores.sort_values("importancia", ascending=False),
        x='fator', y='importancia'
    )),

    html.H2("Comparativo Redes"),
    dcc.Graph(figure=px.box(
        df_predicoes, x="rede", y="probabilidade_evasao", color="rede"
    )),
])

server = app.server  # Necessário para o Render

if __name__ == '__main__':
    app.run_server(debug=True)
