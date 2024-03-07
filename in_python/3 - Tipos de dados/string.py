'''Exemplo de utilização de aspas duplas para que as aspas simples
possam ser utilizadas'''

texto = "Estou estudando Python no 'Linkedin Learning'"

print(texto)

'''O mesmo ocorre ao contrário, onde primeiro utilizamos aspas duplas 
e destacamos a palavra com aspas simples'''

texto = 'Estou estudando Python no "Linkedin Learning"'

texto[16:22]

texto.lower()
texto.upper()

from datetime import datetime

print(f'Data e horário atual: {datetime.now()}')

a = 4
b = 3

print('A divisão de {} por {} é {:.3f}'.format(a, b, a/b))

