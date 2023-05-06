import plotly.graph_objects as go
import pandas as pd
fig = go.Figure()
dados = pd.DataFrame({
    'Idade': [1, 2, 3, 4, 5, 6],
    'Peso': [8, 10, 12, 15, 18, 21],
    'Altura': [70, 80, 90, 100, 110, 120]
})
fig.add_trace(go.Scatter(
    x=dados['Peso'],
    y=dados['Altura'],
    mode='markers',
    marker=dict(
        size=10,
        symbol='circle',
        line=dict(
            width=1,
            color='DarkSlateGrey'
        ),
        opacity=0.7
    ),
    text=dados['Idade']
))

fig.update_layout(
    title='Gráfico de Peso x Altura de Crianças',
    xaxis_title='Peso (kg)',
    yaxis_title='Altura (cm)'
)
fig.show()
