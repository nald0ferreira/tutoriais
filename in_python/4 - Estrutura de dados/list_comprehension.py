# O list comprehension cria uma lista a partir de uma lista existente
lista = [ 2, 4, 6, 7]

# Criar lista que multplica os itens da 1º lista por 2 
lista_duplicada = [ 2 * item for item in lista]

# Cria uma lista com 100 números
lista_100 = list(range(100))

# Cria uma lista que retorne os números divíveis por 20
divisíveis_por_20 = [ item for item in lista_100 if item % 20 == 0]
print(divisiveis_por_20)

# O split é uma função para manipulação de strings
# ele cria uma lista de itens a partir do separador informado

texto = 'O arco-íris é colorido, o céu é azul, a Terra do meu quintal é marron'
print(texto.split())

