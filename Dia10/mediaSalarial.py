import pandas as pd

import pandas as pd


dados = {
    'nomes': ['Éowyn', 'Gandalf', 'Aragorn', 'Legolas'],
    'departamento': ['TI', 'RH', 'TI', 'Financeiro'],
    'salário': [5000, 3000, 5500, 4000]
}

df = pd.DataFrame(dados)


df_ti = df[df['departamento'] == 'TI']


media_salarial_ti = df_ti['salário'].mean()

print(f"A média salarial do departamento de TI é: {media_salarial_ti}")

df_ti = df[df['departamento'] == 'TI']


media_salarial_ti = df_ti['salário'].mean()

print(f"A média salarial do departamento de TI é: {media_salarial_ti}")
