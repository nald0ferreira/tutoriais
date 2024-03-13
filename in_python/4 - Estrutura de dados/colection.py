'''
Colection é um modo nativo do Python que permite criar dicionários
informando o valor padrão das chaves
'''

from collections import defaultdict

natureza = defaultdict(list)
print(natureza)

# A função extend insere varios elementos de uma só vez em uma lista
natureza['fauna'].extend(['arara', 'capivara', 'jacaré', 'macaco'])
print(natureza)

# Para localizar um elemento da lista fauna
print(natureza['fauna'][2])
# O valor 'jacaré' será impresso na tela
