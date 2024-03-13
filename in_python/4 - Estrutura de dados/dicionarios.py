# Dicionários é uma estrutura de dados do tipo chave valor

material_escritorio = {
  'escreve':'lápis',
  'apaga':'borracha',
  'armazena':'caderno'
}

# Podemos obter as chaves com a função keys
print(material_escritorio.keys())

# Para converter as chaves em uma lista utilizamos o list passando o dicionário + keys
list(material_escritorio.values())

# Também é possível recuperar os valores do dicionário
print(material_escritorio.values())

# Para adicionar uma nova chave valor 
material_escritorio['prende'] = 'clip'
print(material_escritorio)

# É possível criar uma chave que receba uma lista
material_escritorio['organiza'] = ['agenda', 'kanban']

# Para inserir um novo elemento na lista criada utilizamos append
material_escritorio['organiza'].append('pasta')
print(material_escritorio['organiza'])
