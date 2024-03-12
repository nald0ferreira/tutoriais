# Python é uma linguagem de base 0, o primeiro elemento recebe o ídice 0
print(lista[0])

# A função append adiciona um elemento na lista
lista.append(60)
print(lista)

# Para substituir um elemento da lista, faça uma nova atribuição
lista[3] =  'sol'
print(lista)

'''
Para remover itens da lista podemos utilizar
o remove que elimina um elemento específico
'''
lista.remove(2)

# A função pop remove o último elemento da lista
lista.pop()
print(lista)
# Agora a lista não possui o número 2 e nem o 60

# Para saber o comprimento da lista utilizamos o len
comprimento = len(lista)
print(f'O comprimento da lista é : {comprimento})

# Para fazer a cópia da lista originakl a lista cópia não será alterada
lista.append('mar')
print(lista_cópia)
print(lista)
