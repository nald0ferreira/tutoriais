'''
bool(1)  //True

bool(-1) //True

bool(0)  //False

bool('string') //True

bool('')    //False

bool({})    //False

bool(None)
'''

minha_lista = [3, 6, None, 80]

if bool(minha_lista) == True:
  print('Minha lista tem valores')

for item in minha_lista:
  if item:
    print(f'{item} é um número válido')
  else:
    print(f'{item} é um valor faltante')
    
