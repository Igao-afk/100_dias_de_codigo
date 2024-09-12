import pandas as pd
import numpy as np


dados = {'vendas': [250, 300, 150, 400, 500, 350]}
df = pd.DataFrame(dados)


media = df['vendas'].mean()
mediana = df['vendas'].median()
desvio_padrao = df['vendas'].std()
maximo = df['vendas'].max()
minimo = df['vendas'].min()


print(f"Média: {media}")
print(f"Mediana: {mediana}")
print(f"Desvio Padrão: {desvio_padrao}")
print(f"Máximo: {maximo}")
print(f"Mínimo: {minimo}")
